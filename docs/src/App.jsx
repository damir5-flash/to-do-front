import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import ToDoPageApp from './toDoPage/ToDoPageApp';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/todo/*" element={<ToDoPageApp />} />
      </Routes>
    </>
  );
}

export default App;
