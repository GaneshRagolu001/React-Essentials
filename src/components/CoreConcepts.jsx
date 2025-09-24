import { CORE_CONCEPTS } from "../data-with-examples";
import CoreConcept from "./CoreConcept";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
