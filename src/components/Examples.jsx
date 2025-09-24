import { EXAMPLES } from "../data-with-examples";
import Button from "./Button";
import { useState } from "react";
import Section from "./Section";

export default function Examples() {
  const [selection, SetSelection] = useState();

  const HandleSelect = (value) => {
    SetSelection(value);
  };

  let content = <p>Please Select a topic</p>;
  if (selection) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selection].title}</h3>
        <p>{EXAMPLES[selection].description}</p>
        <pre>
          <code>{EXAMPLES[selection].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        {Object.keys(EXAMPLES).map((ex) => (
          <Button
            key={ex}
            onClick={() => HandleSelect(ex)}
            isSelected={selection === ex}
          >
            {EXAMPLES[ex].title}
          </Button>
        ))}
      </menu>
      {content}
    </Section>
  );
}
