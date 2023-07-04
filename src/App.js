import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    </Router>
  );
};

export default App;
