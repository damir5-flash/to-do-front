import { useState } from "react";
import "./UserHeader.css";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="userHeader">
      <h1 className="logoText">MyToDO</h1>
      <div className="userMenu">
        <div className="userBlock">
          <img src="userPhoto.png" alt="User" className="userIcon" />
          <div className="userNameBlock" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="userName">user</h3>
            <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
          </div>
          {isOpen && (
          <div className="dropdownMenu">
            <p className="editProfText">Edit Profile</p>
            <p className="logoutText">Log Out</p>
          </div>
            )}
        </div>
        
      </div>
    </nav>
  );
}
