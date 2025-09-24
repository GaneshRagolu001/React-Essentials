import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS,EXAMPLES } from "./data-with-examples";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [selection,SetSelection] = useState();

  const HandleSelect = (value) => {
    SetSelection(value);
  }

  let content = <p>Please Select a topic</p>;
  if(selection){
    content  = (
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((ex) => <Button key={ex} 
            onSelect = {() => HandleSelect(ex)}
            isSelected = {selection === ex}
            >{EXAMPLES[ex].title}</Button>)}
          </menu>
        </section>
        {content}
      </main>
    </div>
  );
}

export default App;
