import { useState } from "react";
import './ToDoPage.css';
import AddTask from '../components/Modal/AddTask';
import SchedulePage from "../components/SchedulePage";

export default function ToDoPage() {
  const [modalActive, setModalActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]); // Добавляем новую задачу
  };

  return (
    <>
      <AddTask active={modalActive} setActive={setModalActive} addTask={addTask} />
      <button className="addNewTaskButton" onClick={() => setModalActive(true)}>+</button>
      <SchedulePage tasks={tasks} />
    </>
  );
}
