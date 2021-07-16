import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import ToDoList from "./To-Do-List";
import { Tasks } from "./Tasks";

function App() {
  return (
    <div>
      <Container>
        <ToDoList />
        <Tasks />
      </Container>
    </div>
  );
}

export default App;
