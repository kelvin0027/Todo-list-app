import React from "react";
import TodoAppItem from "./TodoAppItem";
import api from "../api/todos";

const TodoAppList = ({ todos, setTodos, isLoading, isDeleting, setIsDeleting }) => {
  const deleteBtnHandler = async (id) => {
    const response = await api.delete("/todos/" + id);
    console.log(response.data);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div
        className={`w-[85%] ${
          isLoading || isDeleting ? `flex  justify-center pb-14 items-center` : ""
        } overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-y-3 pt-5 mx-auto h-[60vh]`}
      >
        {isLoading || isDeleting ? (
          <span className={`loading ${isDeleting ? "text-error" : ""} loading-spinner size-10 text-accent`}></span>
        ) : (
          todos.map((todo) => (
            <TodoAppItem deleteBtnHandler={() => deleteBtnHandler(todo.id)} key={todo.id}>
              {todo.title}
            </TodoAppItem>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoAppList;
