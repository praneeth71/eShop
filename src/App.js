

import './App.css';
import Checkout from './Components/Checkout';

import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
            
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
