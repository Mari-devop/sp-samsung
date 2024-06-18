import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Blank from './pages/Blank'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blank" element={<Blank />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
