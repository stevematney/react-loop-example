import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import BlackBoxSelect from "./BlackBoxSelect";

const AppH2 = styled.h2`
  margin-bottom: 10px;
`;

const people = ["Ken A.", "Steve M.", "Danielle A."];

function App() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  return (
    <>
      <h1>Black Box Select Test</h1>
      <AppH2>Selected People:</AppH2>
      <p>{!selectedNames.length ? "Nobody ☹️" : selectedNames.join(", ")}</p>
      <AppH2>Available People:</AppH2>
      <div style={{ margin: 20, marginTop: 0 }}>
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
