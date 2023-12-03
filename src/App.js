import React from 'react'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx';
import Welcome from './components/Welcome.jsx';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/component1" element={<Header />} />
        <Route path="/app/:lat/:lng" element={<Container />} />
      </Routes>
    </Router>


  );
}
export default App;