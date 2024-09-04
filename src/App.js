// import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/add-employee' element={<AddEmployee/>}/>
          <Route path='/employee/:id' element={<UpdateEmployee/>}/>
        </Routes>
      </Router>
  );
}

export default App;
