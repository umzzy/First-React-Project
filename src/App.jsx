import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./Component/Header/Header.jsx";
import CoreConcepts from "./Component/CoreConcept.jsx";
import TabButton from "./Component/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = selectedButton => {
    setSelectedTopic(selectedButton);
  };
  const menuItems = Object.keys(EXAMPLES);

  let tabContent = <p>Please select a topic to view the example.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {menuItems.map(item => (
              <TabButton
                key={item}
                isSelected={selectedTopic === item}
                onSelect={() => handleSelect(item)}
              >
                {item.toUpperCase()}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
