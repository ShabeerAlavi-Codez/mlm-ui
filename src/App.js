// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Homes';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/udashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
