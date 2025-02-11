import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ParticlesBg from "particles-bg";
import { Component, useEffect, useState } from "react";
import ListHeader from "./components/ToDoList/ListHeader";
import ListItem from "./components/ToDoList/ListItem";
import Auth from "./components/Auth/Auth";

const App = () => {
  const userEmail = "paula@gmail.com";
  const [todos, setTodos] = useState(null);

  const authToken = false;

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/todos/${userEmail}`
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  // const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken && (
        <div>
          <div style={{ display: "flex" }}>
            <Logo />
            <ListHeader listName={"Holiday Tick List"} getData={getData} />
          </div>
          <div>
            {todos?.map((todo) => (
              <ListItem key={todo.id} todo={todo} getData={getData} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
