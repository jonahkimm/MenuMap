import React from 'react'
import Header from './components/Header.jsx'
import EmbededMap from './components/EmbededMap.jsx';
import Container from './components/Container.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <Container/>
      <EmbededMap />
    </div>

  );
}
export default App;