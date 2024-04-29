import React from "react";
import { useDispatch } from "react-redux";
import { DeleteTask } from "../redux/slices/taskSlice";

const Task = ({ mytask }) => {
  const dispatch = useDispatch();
  return (
    <div className="task-list">
      <div className="todo-data-container">
      <span className="title-style">{mytask.title}</span>
      <small className="description-style">{mytask.desc}</small>
      </div>
      
      <div className="task-form-btn-container ">
        <button
          onClick={() => {
            dispatch(DeleteTask(mytask._id));
          }}
        >
        <i className="fa-solid fa-trash"></i>
        </button>
        
      </div>
        </div>
  );
};

export default Task;
