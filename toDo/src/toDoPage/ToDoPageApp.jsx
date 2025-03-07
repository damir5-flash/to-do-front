import { Routes, Route } from 'react-router-dom';
import ToDoPage from './ToDoPage';
import Pomodor from './Pomodor';
import UserHeader from '../components/UserHeader';

function ToDoPageApp() {
  return (<>
    <UserHeader/>
    <Routes>
      <Route path="/" element={<ToDoPage />} />
      <Route path="/pomodor" element={<Pomodor />} />
    </Routes>
  </>);
}

export default ToDoPageApp;
