import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoPage from './toDoPage/ToDoPage';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </>
  );
}

export default App;
