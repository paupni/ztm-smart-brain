import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ParticlesBg from "particles-bg";
import { Component, useEffect, useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import ListHeader from "./components/ToDoList/ListHeader";
import ListItem from "./components/ToDoList/ListItem";

const App = () => {
  const userEmail = "paula@gmail.com";
  const [todos, setTodos] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => fetchData, []);

  // const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="App">
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <div>
        <Logo />
        <ListHeader listName={"Holiday Tick List"} />
        {todos?.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
