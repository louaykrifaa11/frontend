import React, { useRef } from "react";
import { CreateTask } from "../redux/slices/taskSlice";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const title = useRef();
  const description = useRef();
  const dispatch = useDispatch();
  return (
    <div className="center">
      <input type="text" placeholder="type ur task title" ref={title}></input>
      <input
        type="text"
        placeholder="type ur task description"
        ref={description}
      ></input>
      <div className="task-form-btn-container">
        <button
          onClick={() => {
            dispatch(
              CreateTask({
                title: title.current.value,
                desc: description.current.value,
              })
            );
          }}
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
