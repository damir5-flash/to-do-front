import { useState } from "react";
import "./AddTask.css";

export default function AddTask({ active, setActive, addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);

  const handleAdd = () => {
    if (!title || !date) return; // Проверка на пустые значения
    const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    addTask({ title, description, date, time });
    setTitle("");
    setDescription("");
    setDate("");
    setHours(12);
    setMinutes(0);
    setActive(false); // Закрываем модальное окно
  };

  if (!active) return null;

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          className="titleInput"
          placeholder="TITLE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="descriptionInput"
          placeholder="DESCRIBE"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="bottomRow">
          <input
            type="date"
            className="dateInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="timePicker">
            <div className="timeBlock">
              <button onClick={() => setHours((prev) => (prev < 23 ? prev + 1 : 0))}>▲</button>
              <span>{String(hours).padStart(2, "0")}</span>
              <button onClick={() => setHours((prev) => (prev > 0 ? prev - 1 : 23))}>▼</button>
            </div>
            <span>:</span>
            <div className="timeBlock">
              <button onClick={() => setMinutes((prev) => (prev < 59 ? prev + 1 : 0))}>▲</button>
              <span>{String(minutes).padStart(2, "0")}</span>
              <button onClick={() => setMinutes((prev) => (prev > 0 ? prev - 1 : 59))}>▼</button>
            </div>
          </div>
          <button className="addButton" onClick={handleAdd}>ADD</button>
        </div>
      </div>
    </div>
  );
}
