import { useRef } from "react";
import { Editor, init } from "./components/Editor";
import { EditorController } from "./components/Editor/Editor";
import { Toolbar } from "./components/Toolbar";

import nearley, { CompiledRules } from "nearley";
// @ts-ignore
import compile from "nearley/lib/compile";
// @ts-ignore
import generate from "nearley/lib/generate";
// @ts-ignore
import nearleyGrammar from "nearley/lib/nearley-language-bootstrapped";
import { useRecoilState } from "recoil";
import { grammarStore } from "./store/parser";
import { showNotification } from "@mantine/notifications";

init();

function compileGrammar(grammar: string) {
  const module: any = { exports: {} };
  try {
    const grammarParser = new nearley.Parser(nearleyGrammar);
    grammarParser.feed(grammar);
    const grammarAst = grammarParser.results[0];

    const grammarInfoObject = compile(grammarAst, {});
    const grammarJs = generate(grammarInfoObject, "grammar");

    eval(grammarJs);
  } catch (error: any) {
    module.exports.error = error.message.split("\n").slice(0, 3).join("\n");
  }
  return module.exports as CompiledRules | { error: string };
}

function App() {
  const [grammar, setGrammar] = useRecoilState(grammarStore);

  const codeController = useRef<EditorController | null>(null);
  const testController = useRef<EditorController | null>(null);
  const resultController = useRef<EditorController | null>(null);

  return (
    <div className="app monaco-editor">
      <Toolbar
        onCompile={async () => {
          const value = codeController.current!.getValue();

          if (value) {
            try {
              const grammar = compileGrammar(value) as CompiledRules;
              if (grammar.ParserRules) {
                setGrammar(grammar);
                showNotification({
                  title: "Done",
                  message: "Grammar compiled successfully",
                  color: "green",
                  autoClose: 1000,
                });
              } else {
                showNotification({
                  title: "Error compiling grammar",
                  message: (grammar as any).error,
                  color: "red",
                });
              }
            } catch (error: any) {
              showNotification({
                title: "Error compiling grammar",
                message: error.message,
                color: "red",
              });
              console.log(error);
            }
          }
        }}
        onTest={async () => {
          const value = testController.current!.getValue();

          console.log(grammar, value);
          if (grammar && value && resultController.current) {
            const parser = new nearley.Parser(
              nearley.Grammar.fromCompiled(grammar)
            );

            try {
              parser.feed(value);
              resultController.current.setValue(
                JSON.stringify(parser.results, null, 2)
              );
            } catch (error: any) {
              showNotification({
                title: "Error running test",
                message: error.message.split("\n").slice(0, 3).join("\n"),
                color: "red",
              });
            }
          } else {
            console.log("no parser");
          }
        }}
      />
      <div className="editors">
        <div className="vertical-editors">
          <div className="editor-wrapper">
            <Editor
              onReady={(controller) => (codeController.current = controller)}
              language="plain"
              value='main -> "program"'
              options={{
                tabSize: 2,
              }}
            />
          </div>
          <div className="editor-wrapper">
            <Editor
              onReady={(controller) => (testController.current = controller)}
              language="plain"
              value="program"
              options={{
                tabSize: 2,
              }}
            />
          </div>
        </div>
        <div className="editor-wrapper">
          <Editor
            onReady={(controller) => (resultController.current = controller)}
            language="json"
            value="{}"
            options={{
              tabSize: 2,
              readOnly: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
