import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './page/shared/Nav/Nav';
import CompleteTask from './page/CompleteTask/CompleteTask';
import ToDo from './page/ToDo/ToDo';
import Calendar from './page/Calendar/Calendar';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        {/* <Route path='/' element={ }></Route> */}
        <Route path='/completeTask' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/toDo' element={<ToDo></ToDo>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
