import React from 'react'
import MiddleSearch from './components/MiddleSearch.jsx';
import Header from './components/Header.jsx'
import EmbededMap from './components/EmbededMap.jsx';
import Recommendations from './components/Recommendations.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Recommendations/>
      <MiddleSearch />
      <EmbededMap />
    </div>

  );
}
export default App;