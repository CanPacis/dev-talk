import { Button, Group, Space, Text, Title } from "@mantine/core";
import * as React from "react";
import { style } from "./style";

// @ts-ignore
import Reveal from "reveal.js";
// @ts-ignore
// import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/dist/reveal.css";
import { Prism } from "@mantine/prism";
import { Link } from "react-router-dom";

export function Presentation() {
  const deck = React.useRef<any>();
  const { classes } = style();

  React.useEffect(() => {
    let instance = new Reveal({
      // plugins: [RevealHighlight],
      backgroundTransition: "slide",
      transition: "slide",
    });
    instance.initialize();

    deck.current = instance;
  }, []);

  return (
    <div className="reveal" style={{ height: "100vh" }}>
      <img className={classes.bg} src="/bg.jpg" alt="background" />
      <div className="slides" data-transition="slide">
        <section data-transition="slide">
          <Title order={1}>Ayrıştırma Teoremine Giriş</Title>
          <Text>Muhammed Ali CAN</Text>
        </section>

        <section data-transition="slide">
          <Title order={2}>Yazılım Dilleri</Title>
          <Space h="xl" />
          <Group sx={{ justifyContent: "center" }}>
            <img height={60} src="/ts-logo.png" alt="ts logo" />
            <img height={60} src="/go-logo.png" alt="go logo" />
            <img height={60} src="/rust-logo.png" alt="rust logo" />
          </Group>
          <Space h={50} />
          <Group sx={{ justifyContent: "center" }}>
            <Prism
              sx={{ width: "60%", fontSize: "1em" }}
              noCopy
              withLineNumbers
              language="javascript"
            >
              {`console.log("Every moment");`}
            </Prism>
            <Prism
              sx={{ width: "60%", fontSize: "1em" }}
              noCopy
              withLineNumbers
              language="go"
            >
              {`fmt.Println("I live...");`}
            </Prism>
            <Prism
              sx={{ width: "60%", fontSize: "1em" }}
              noCopy
              withLineNumbers
              language="clike"
            >
              {`println!("is agony");`}
            </Prism>
          </Group>
        </section>

        <section data-transition="slide">
          <Title order={3}>Bir Yazılım Dili Nasıl Çalışır</Title>
          <Space h="xl" />
          <img height={400} src="/cat.gif" alt="cat bashing keyboard gif" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/compile.png" alt="compiling" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/questions-2.png" alt="questions" />
        </section>

        <section data-transition="slide">
          <img width="100%" src="/google.png" alt="compiling" />
        </section>

        <section data-transition="slide">
          <img width="100%" src="/stackoverflow.png" alt="compiling" />
        </section>

        <section data-transition="slide">
          <img width="100%" src="/medium.png" alt="compiling" />
        </section>

        <section data-transition="slide">
          <img height={500} src="/book.jpeg" alt="compiling" />
        </section>

        <section data-transition="slide">
          <Title order={3}>Bir Programın Yolculuğu</Title>
          <Space h="xl" />
          <img height={400} src="/journey.png" alt="hero's journey" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/cat-2.gif" alt="cat bashing keyboard gif" />
        </section>

        <section data-transition="slide">
          <img
            width="100%"
            src="/compiled-vs-interpreted.png"
            alt="compiled vs interpreted languages"
          />
        </section>

        <section data-transition="slide">
          <img
            height={600}
            src="/compiler-interpreter.png"
            alt="compiler and interpreter"
          />
        </section>

        <section data-transition="slide">
          <img height={600} src="/questions.png" alt="questions" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/clang.png" alt="clang logo" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/js-logo.png" alt="js logo" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/v8.png" alt="v8 logo" />
        </section>

        <section data-transition="slide">
          <img height={600} src="/ast.png" alt="ast" />
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`let message = "Hello, world!"
console.log(message)`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Title order={2}>Terminoloji</Title>
        </section>

        <section data-transition="slide">
          <Title order={3}>Sentaks</Title>
          <Space h="xl" />
          <img width="100%" src="/syntax.png" alt="syntax" />
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="makefile">
            {`Ben seni seviyorum.
^   ^    ^
Ö   N    Y`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="makefile">
            {`I love you.
^ ^    ^
S O    V`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Title order={3}>Gramer</Title>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`let count = 0
count = count + 1`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Title order={3}>Lexicology, Lexer ve Lexing</Title>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`2 * (3 + 5)`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`["2", "*", "(", "3", "+", "5", ")"];`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`[">", "=", ">="];`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Title order={3}>Diğer</Title>
        </section>

        <section data-transition="slide">
          <Title order={3}>Semantik</Title>
        </section>

        <section data-transition="slide">
          <Title order={3}>Ambiguity/Muğlaklık</Title>
        </section>

        <section data-transition="slide">
          <Title order={2}>Ayrıştırma</Title>
          <Space h="xl" />
          <img
            width="100%"
            src="/parser-flowchart.png"
            alt="parser flowchart"
          />
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`sayı - operatör - sayı`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`2 + 2 + 5`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Title order={1}>Lexing!</Title>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`["+", "-", "*", "/"];`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`/[0-9]+/`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`25 + 57
+ 4 4 / 6`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`25 + 57`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="json">
            {`[
	{ “token”: “number”, ”literal”: 25, “type”: null },
	{ “token”: “operator”, ”literal”: “+”, “type”: “addition” },
	{ “token”: “number”, ”literal”: 57, “type”: null },
]`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`+ 4 4 / 6`}
          </Prism>
          <Prism noCopy withLineNumbers language="json">
            {`[
	{ “token”: “operator”, ”literal”: “+”, “type”: “addition” },
	{ “token”: “number”, ”literal”: 4, “type”: null },
	{ “token”: “number”, ”literal”: 4, “type”: null },
	{ “token”: “operator”, ”literal”: “/”, “type”: “division” },
	{ “token”: “number”, ”literal”: 6, “type”: null },
]
`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Title order={2}>Gramer Tanımı ve EBNF</Title>
        </section>

        <section data-transition="slide">
          <img height={500} src="/backus.jpeg" alt="john backus" />
          <img height={500} src="/naur.jpg" alt="peter naur" />
        </section>

        <section data-transition="slide">
          <img height={500} src="/backus.jpeg" alt="john backus" />
        </section>

        <section data-transition="slide">
          <Title order={3}>Terminal & Non-terminal</Title>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="javascript">
            {`program = number operator number
number = [0-9]+
operator = “+” | “-” | “*” | “/”`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="json">
            {`[
	{ “token”: “number”, ”literal”: 25, “type”: null },
	{ “token”: “operator”, ”literal”: “+”, “type”: “addition” },
	{ “token”: “number”, ”literal”: 57, “type”: null },
]
`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="json">
            {`{
  “program”: [
    { “token”: “number”, ”literal”: 25, “type”: null },
    { “token”: “operator”, ”literal”: “+”, “type”: “addition” },
    { “token”: “number”, ”literal”: 57, “type”: null },
  ] 
}
`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="json">
            {`{
  “program”: {
    “action”: “addition”,
    “left”: { “type”: “number”, “literal”: 25 },
    “right”: { “type”: “number”, “literal”: 57 },
  }
}
`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="json">
            {`program = number operator program | number
number = [0-9]+
operator = “+” | “-” | “*” | “/”
`}
          </Prism>
        </section>

        <section data-transition="slide">
          <Prism noCopy withLineNumbers language="json">
            {`program = ws addition_subtraction ws
addition_subtraction = addition_subtraction ws “+” ws multiplication_division
			| addition_subtraction ws “-” ws multiplication_division
			| multiplication_division
multiplication_division = multiplication_division ws “*” ws number
			| multiplication_division ws “/” ws number
			| number
number = [0-9]+
ws = [\s]:*
`}
          </Prism>
        </section>

        <section>
          <Button to="/interactive" component={Link}>
            Interaktif Uygulamaya Git
          </Button>
        </section>
      </div>
    </div>
  );
}
