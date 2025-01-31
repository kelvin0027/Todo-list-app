import React, { useState } from "react";
import api from "./api/todos";
import TodoAppForm from "./components/TodoAppForm";
import TodoAppList from "./components/TodoAppList";

const App = () => {
  const [inputFieldValue, setinputFieldValue] = useState("");
  const [todos, setTodos] = useState([]);
  const deleteAllTodos = async () => {
    const deletePromises = todos.map((todo) => api.delete(`/todos/${todo.id}`));
    await Promise.all(deletePromises);
    setTodos([])
  };
  return (
    <div className="w-[35vw] pt-[3rem] rounded-2xl space-y-2 mx-auto h-[98vh] bg-[#0F303B] ">
      <TodoAppForm todos={todos} setTodos={setTodos} inputFieldValue={inputFieldValue} setinputFieldValue={setinputFieldValue}></TodoAppForm>
      <TodoAppList todos={todos} setTodos={setTodos} inputFieldValue={inputFieldValue} setinputFieldValue={setinputFieldValue}></TodoAppList>
      <div className="w-[85%] mx-auto">
        <button  onClick={deleteAllTodos} className=" px-1 text-sm py-2 bg-red-400 rounded-lg">Clear all Todo's </button>
      </div>
    </div>
  );
};

export default App;
