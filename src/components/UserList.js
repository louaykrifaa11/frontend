import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTask } from "../redux/slices/taskSlice";
import Task from "./Task";

const UserList = () => {
  const dispatch = useDispatch();
  const { taskData } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(GetTask());
  }, []);
  return (
    <div className="center">
      <>
        <h2>Todo List</h2>
      </>
      <div className="todo-list">
        {taskData.map((task) => (
          <Task mytask={task} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
