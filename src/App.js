import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
     
    <Routes>
      
       
       
          <Route path="/" element={<Home/>} />
          <Route path="appointment" element={<Appointment/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
      
    </Routes>
  
    </div>
  );
}

export default App;
