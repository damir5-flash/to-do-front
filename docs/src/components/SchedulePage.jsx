import { useState } from "react";
import "./SchedulePage.css";

export default function SchedulePage({ tasks }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date("2025-03-03"));

  const toggleDescription = (taskId) => {
    setSelectedTask(selectedTask === taskId ? null : taskId);
  };

  const daysOfWeek = [
    { name: "Monday", index: 0 },
    { name: "Tuesday", index: 1 },
    { name: "Wednesday", index: 2 },
    { name: "Thursday", index: 3 },
    { name: "Friday", index: 4 },
    { name: "Saturday", index: 5 },
    { name: "Sunday", index: 6 }
  ];

  const changeWeek = (direction) => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentWeekStart(newDate);
  };

  const getDayDate = (index) => {
    const dayDate = new Date(currentWeekStart);
    dayDate.setDate(currentWeekStart.getDate() + index);
    return dayDate;
  };

  const getEndOfWeek = () => {
    const endDate = new Date(currentWeekStart);
    endDate.setDate(endDate.getDate() + 6);
    return endDate;
  };

  return (
    <div className="schedule-container">
      <div className="week-navigation">
        <button onClick={() => changeWeek(-1)}>←</button>
        <h2>{currentWeekStart.toLocaleDateString()} - {getEndOfWeek().toLocaleDateString()}</h2>
        <button onClick={() => changeWeek(1)}>→</button>
      </div>

      <div className="schedule">
        <div className="left-column">
          {daysOfWeek.filter(d => d.index % 2 === 0).map(({ name, index }) => {
            const dayDate = getDayDate(index);
            const filteredTasks = tasks
              .filter(task => new Date(task.date).toDateString() === dayDate.toDateString())
              .sort((a, b) => a.time.localeCompare(b.time));

            return (
              <div key={index} className="day">
                <h3>{name.toUpperCase()} {dayDate.toLocaleDateString()}</h3>
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task, idx) => (
                    <div key={idx} className="task" onClick={() => toggleDescription(task.id)}>
                      <strong>{task.time} {task.title}</strong>
                      {selectedTask === task.id && <p>{task.description}</p>}
                    </div>
                  ))
                ) : (
                  <p className="empty">Нет задач</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="right-column">
          {daysOfWeek.filter(d => d.index % 2 !== 0).map(({ name, index }) => {
            const dayDate = getDayDate(index);
            const filteredTasks = tasks
              .filter(task => new Date(task.date).toDateString() === dayDate.toDateString())
              .sort((a, b) => a.time.localeCompare(b.time));

            return (
              <div key={index} className="day">
                <h3>{name.toUpperCase()} {dayDate.toLocaleDateString()}</h3>
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task, idx) => (
                    <div key={idx} className="task" onClick={() => toggleDescription(task.id)}>
                      <strong>{task.time} {task.title}</strong>
                      {selectedTask === task.id && <p>{task.description}</p>}
                    </div>
                  ))
                ) : (
                  <p className="empty">Нет задач</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
