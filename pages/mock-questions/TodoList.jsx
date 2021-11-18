import { useSatate, useState } from "react";

export default function Mock7_3() {
  const initialState = [
    { id: 0, name: "Task 1", completed: true },
    { id: 1, name: "Task 2", completed: false },
    { id: 2, name: "Task 3", completed: false }
  ];
  const [tasks, setTasks] = useState(initialState);
  const onChangeHandler = (e, id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };

    let updatedTaskList = tasks.filter((task) => task.id !== id);
    updatedTaskList = updatedTaskList.concat(updatedTask);
    setTasks(updatedTaskList);

    console.log(tasks);
  };
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.name}</span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => onChangeHandler(e, task.id)}
          />
          <br />
        </div>
      ))}
    </>
  );
}
