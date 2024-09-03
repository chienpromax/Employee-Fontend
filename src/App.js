// import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from './components/AddEmployee';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList/>}/>
          <Route path="/add-employee" element={<AddEmployee/>}/>
        </Routes>
      </Router>
  );
}

export default App;
