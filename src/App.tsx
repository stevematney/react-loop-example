import { useState } from "react";
import "./App.css";
import BlackBoxSelect from "./BlackBoxSelect";

const people = ["Steve M.", "Ken A.", "Joe S"];

function App() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  return (
    <>
      <h1>Black Box Select Test</h1>
      <p>Selected People: {selectedNames.join(", ")}</p>
      <div style={{ margin: 20 }}>
        <BlackBoxSelect
          items={people}
          onChange={(newSelectedPeople) => {
            setSelectedNames(
              newSelectedPeople.map((person) => person.split(" ")[0])
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
