// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <Router> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
