import Home from './Componets/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingIn from './Componets/SingIn';
import SingUp from './Componets/SingUp';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/SingUp" element={<SingUp />} />
      <Route path="/Home" element={< Home />} />
    </Routes>
  </Router>

  );
}

export default App;
