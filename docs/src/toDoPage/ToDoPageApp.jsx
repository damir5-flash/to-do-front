import { Routes, Route } from 'react-router-dom';
import ToDoPage from './ToDoPage';
import Pomodor from './Pomodor';
import UserHeader from '../components/UserHeader';
import Menu from '../components/Menu';
import './ToDoPageApp.css';

function ToDoPageApp() {
  return (<>
    <UserHeader/>
    <div className='toDoPageBlock'>
      <div className="menuBlock">
        <Menu/>
      </div>
      <div className="contentBlock">
        <Routes>
          <Route path="/" element={<ToDoPage />} />
          <Route path="/pomodor" element={<Pomodor />} />
        </Routes>
      </div>
    </div>
  </>);
}

export default ToDoPageApp;
