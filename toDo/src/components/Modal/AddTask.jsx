import './AddTask.css';

export default function AddTask({ active, setActive }) {
  if (!active) return null; // Если модалка не активна — не рендерим

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <input type="text" className="titleInput" placeholder="TITLE" />
        <textarea className="descriptionInput" placeholder="DESCRIBE"></textarea>
        <div className="bottomRow">
          <input type="date" className="dateInput" />
          <button className="addButton">ADD</button>
        </div>
      </div>
    </div>
  );
}
