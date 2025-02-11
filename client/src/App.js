import "./App.css";
import Logo from "./components/Logo/Logo";
import { useEffect, useState } from "react";
import ListHeader from "./components/ToDoList/ListHeader";
import ListItem from "./components/ToDoList/ListItem";
import Auth from "./components/Auth/Auth";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;
  const [todos, setTodos] = useState(null);

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

  const sortedTodos = todos?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="App">
      {!authToken && <Auth />}
      {authToken && (
        <div>
          <div style={{ display: "flex" }}>
            <Logo />
            <ListHeader listName={"Holiday Tick List"} getData={getData} />
            <p>Welcome back {userEmail}</p>
          </div>
          <div>
            {sortedTodos?.map((todo) => (
              <ListItem key={todo.id} todo={todo} getData={getData} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
