import { useState } from "react";
import './ToDoPage.css'
import AddTask from '../components/Modal/AddTask';

export default function ToDoPage() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <AddTask active={modalActive} setActive={setModalActive} />
      <button className="addNewTaskButton" onClick={() => setModalActive(true)}>+</button>
    </>
  );
}


