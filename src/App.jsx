import React, { useState } from "react";
import api from "./api/todos";
import TodoAppForm from "./components/TodoAppForm";
import TodoAppList from "./components/TodoAppList";

const App = () => {
  const [inputFieldValue, setinputFieldValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteAllTodos = async () => {
    setIsDeleting(true);
    const deletePromises = todos.map((todo) => api.delete(`/todos/${todo.id}`));
    await Promise.all(deletePromises);
    setTodos([]);
    setIsDeleting(false);
  };
  return (
    <div className="w-[35vw] pt-[3rem] rounded-2xl space-y-2 mx-auto h-[98vh] bg-[#0F303B] ">
      <TodoAppForm
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        todos={todos}
        setTodos={setTodos}
        inputFieldValue={inputFieldValue}
        setinputFieldValue={setinputFieldValue}
      ></TodoAppForm>
      <TodoAppList
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        todos={todos}
        setTodos={setTodos}
        inputFieldValue={inputFieldValue}
        setinputFieldValue={setinputFieldValue}
      ></TodoAppList>
      <div className="w-[85%] mx-auto">
        <button onClick={deleteAllTodos} className=" text-black px-2 text-sm py-2 bg-red-400 rounded-lg">
          Clear all Todos
        </button>
      </div>
    </div>
  );
};

export default App;
