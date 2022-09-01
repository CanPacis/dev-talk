import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import Dracula from "monaco-themes/themes/Dracula.json";
import { useEffect, useRef } from "react";

export interface EditorController {
  getValue(): string;
  setValue(value: string): void;
}

export interface EditorProps {
  language?: string;
  value?: string;
  options?: MonacoEditorProps["options"];
  onReady: (controller: EditorController) => void;
}

export function Editor(props: EditorProps) {
  const editorRef = useRef<any | null>(null);
  
  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    const controller = {
      getValue: () => editorRef.current.getValue(),
      setValue: (value: string) => editorRef.current.setValue(value),
    }

    props.onReady(controller)
  }

  return (
    <MonacoEditor
      width="100%"
      height="100%"
      theme="dracula"
      defaultLanguage={props.language || "json"}
      defaultValue={props.value || ""}
      options={{ ...(props.options || {}) }}
      onMount={handleEditorDidMount}
    />
  );
}

export function init() {
  loader.init().then((monaco) => {
    monaco.editor.defineTheme("dracula", Dracula);
  });
}
