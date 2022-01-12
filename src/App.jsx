import React from 'react';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<div>Main </div>} />
          <Route
            exact
            path="/character/:characterId"
            element={<div>Character Page</div>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
