import React from "react";
import TodoAppItem from "./TodoAppItem";
import api from "../api/todos";

const TodoAppList = ({
  todos,
  setTodos,
  isLoading,
  isEditingId,
  setIsEditingId,
  isEditing,
  setIsEditing,
  isDeleting,
  setinputFieldValue,
  InputFieldValue,
}) => {
  const deleteBtnHandler = async (id) => {
    try {
      const response = await api.delete("/todos/" + id);
      console.log(response.data);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const editTodoHandler = (title, id) => {
    setinputFieldValue(title);
    setIsEditing(true);
    setIsEditingId(id);
  };

  return (
    <div>
      <div
        className={`w-[85%] ${
          isLoading || isDeleting || todos.length === 0 ? `flex pl-5 justify-center pb-14 items-center` : ""
        } overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-y-3 pt-5 mx-auto h-[60vh]`}
      >
        {isLoading || isDeleting ? (
          <span className={`loading ${isDeleting ? "text-error" : ""} loading-spinner size-10 text-accent`}></span>
        ) : todos.length === 0 ? (
          <p className="text-center text-xl text-gray-300 italic">No tasks available. Add a new todo!</p>
        ) : (
          todos.map((todo) => (
            <TodoAppItem editTodoHandler={() => editTodoHandler(todo.title, todo.id)} deleteBtnHandler={() => deleteBtnHandler(todo.id)} key={todo.id}>
              {todo.title}
            </TodoAppItem>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoAppList;
