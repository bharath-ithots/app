import React, { useState } from "react";
import './App.css';
//importing from components
import form from './components/Form';
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Just Do It {inputText} </h1>
      </header>
      <form inputText={inputText}
       todos={todos}
       setTodos={setTodos} 
       setInputText={setInputText} 
      />
      <TodoList todos={todos} />
    </div>
  );
}


export default App;
