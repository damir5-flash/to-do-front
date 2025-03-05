import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая проверка (замени на реальную аутентификацию)
    if (username === "admin" && password === "1234") {
      navigate("/todo"); // Переход на страницу задач
    } else {
      alert("Неверные учетные данные!");
    }
  };

  return (
    <div className="login">
      <h2 className="active">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input 
            type="text" 
            className="text" 
            name="username" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="floating-label">Username</label>
        </div>

        <div className="input-container">
          <input 
            type={showPassword ? "text" : "password"} 
            className="text" 
            name="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="floating-label">Password</label>
        </div>

        <div className="toggle-password">
          <input 
            type="checkbox" 
            id="toggle-password" 
            onChange={() => setShowPassword(!showPassword)} 
          />
          <label htmlFor="toggle-password">Show Password</label>
        </div>

        <button type="submit" className="sign">Sign In</button>
      </form>
    </div>
  );
}
