import React, { useEffect, useState } from "react";
import todoSvg from "../assets/calendar-svgrepo-com.svg";
import api from "../api/todos";

const TodoAppForm = ({ inputFieldValue, setinputFieldValue, setTodos, setIsLoading, isLoading }) => {
  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/todos");
      setTodos(response.data.reverse());
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  const onSumbitHandler = async (e) => {
    try {
      e.preventDefault();
      const newTask = { title: inputFieldValue, completed: false };

      const response = await api.post("/todos", newTask);
      console.log(response.data);
      setTodos((prevTodos) => [response.data, ...prevTodos]);
      setinputFieldValue("");
      console.log(inputFieldValue);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <p className="text-4xl  text-center pb-4 font-medium font-serif ">Todo-List</p>
      <form onSubmit={onSumbitHandler} className="flex items-center max-w-[85%] mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img className="size-4" src={todoSvg} alt="" />
          </div>
          <input
            onChange={(e) => {
              setinputFieldValue(e.target.value);
            }}
            type="text"
            value={inputFieldValue}
            id="simple-search"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add todo..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 w-[35%] text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Todo
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default TodoAppForm;
