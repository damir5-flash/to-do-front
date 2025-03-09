import './Menu.css'
import { NavLink, useLocation } from "react-router-dom";

export default function Menu(){
    const location = useLocation();

    return (
        <div className="menuBlock">
           <NavLink 
                to="/todo" 
                className={`toDoBlock ${location.pathname === "/todo/pomodor" ? "inactive" : "active"}`}>
                <img src="list-task.svg" alt="List Icon" className="menuIcon" />
                <h2 className="toDoText">LIST</h2>
            </NavLink>

            <NavLink 
                to="/todo/pomodor" 
                className={`pomodorBlock ${location.pathname === "/todo/pomodor" ? "active" : ""}`}>
                <img src="stopwatch.svg" alt="Pomodoro Icon" className="menuIcon" />
                <h2 className="pomodorText">POMODOR</h2>
            </NavLink>


        </div>
    );
};

