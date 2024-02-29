import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Heading from "./components/Heading/Heading";
import ListOfToDo from "./components/ListOfToDo/ListOfToDo";

function App(props) {
  const [todo, setTodo] = useState({});

  const formOnChangeHandler = (e) => {
    const name = e.target.name;
    const todovalue = e.target.value;
    setTodo((prev) => ({ ...prev, [name]: todovalue }));
  };
  console.log(formOnChangeHandler);
  return (
    <>
      <Heading />
      <AddTodo onChangeHandler={formOnChangeHandler} />
      <ListOfToDo todo={todo} />
    </>
  );
}

export default App;
