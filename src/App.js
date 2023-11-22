import React from 'react'
import Sidebar from './components/Sidebar.jsx';
import MiddleSearch from './components/MiddleSearch.jsx';
import Header from './components/Header.jsx'
import EmbededMap from './components/EmbededMap.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MiddleSearch />
      <EmbededMap />
    </div>

  );
}
export default App;