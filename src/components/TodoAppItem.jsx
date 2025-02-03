import React from "react";
import redTrash from "../assets/red-trash.svg";
import greenEdit from "../assets/edit-52.svg";
import redCross from "../assets/red-cross.svg";
import greenTick from "../assets/green-tick.svg";
const TodoAppItem = ({ children, deleteBtnHandler, editTodoHandler,  markAsDoneHandler, className, completed}) => {
  return (
    <div>
      <div className="w-[100%] border-white px-4 py-1 justify-between flex items-center border-[1.5px] min-h-[8vh] rounded-xl">
        <p className={` w-[80%]  text-lg text-white ${className} `}>{children}</p>
        <div className={`flex items-center gap-2`}>
          <button onClick={markAsDoneHandler}>
            <img
              className={`size-[1.5rem] ${completed ? "lg:size-[1.35rem] size-[1.6rem]" : ""}`}
              src={completed ? redCross : greenTick}
              alt="done"
            />
          </button>
          <button onClick={editTodoHandler}>
            <img className="lg:size-[1.3rem] size-[1.55rem]" src={greenEdit} alt="Edit" />
          </button>
          <button onClick={deleteBtnHandler}>
            <img className="lg:size-6 size-[1.8rem]" src={redTrash} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAppItem;

