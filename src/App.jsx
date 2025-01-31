import React, { useState } from "react";
import TodoAppForm from "./components/TodoAppForm";
import TodoAppList from "./components/TodoAppList";

const App = () => {
  const [inputFieldValue, setinputFieldValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="w-[35vw] pt-[4rem] rounded-2xl space-y-2 mx-auto h-[94vh] bg-[#0F303B] ">
      <TodoAppForm todos={todos} setTodos={setTodos} inputFieldValue={inputFieldValue} setinputFieldValue={setinputFieldValue}></TodoAppForm>
      <TodoAppList todos={todos} setTodos={setTodos} inputFieldValue={inputFieldValue} setinputFieldValue={setinputFieldValue}></TodoAppList>
    </div>
  );
};

export default App;
