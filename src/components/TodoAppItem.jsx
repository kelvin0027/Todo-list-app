import React from "react";
import redTrash from "../assets/red-trash.svg";
import greenEdit from "../assets/green-edit.svg";
const TodoAppItem = ({ children }) => {
  return (
    
    <div>
      <div className="w-[100%] border-white px-4 justify-between flex items-center border-[1.5px] min-h-[8vh] rounded-xl">
        <p className=" w-[80%]  text-lg text-white">{children}</p>
        <div className="flex items-center gap-2">
          <button>
            <img className="size-[1.3rem]" src={greenEdit} alt="Edit" />
          </button>
          <button>
            <img className="size-6" src={redTrash} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAppItem;
