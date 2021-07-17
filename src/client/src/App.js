import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Tasks } from "./components/tasks";

function App() {
  return (
    <div>
      <Container>
        <Tasks />
      </Container>
    </div>
  );
}

export default App;
