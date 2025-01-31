import React from "react";
import TodoAppItem from "./TodoAppItem";
import api from "../api/todos";

const TodoAppList = ({ todos }) => {
  return (
    <div>
      <div className="w-[85%] overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-y-3 pt-5 mx-auto h-[60vh]">
        {todos.map((todo) => (
          <TodoAppItem key={todo.id}>{todo.title}</TodoAppItem>
        ))}
      </div>
    </div>
  );
};

export default TodoAppList;
