import React from "react"
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Details from './component/Details';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
