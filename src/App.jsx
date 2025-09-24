import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples";
import Button from "./components/Button";
import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
