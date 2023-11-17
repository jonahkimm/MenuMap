import React from 'react'
import Rescard from './components/Rescard.jsx';
import Sidebar from './components/Sidebar.jsx';
import MiddleSearch from './components/MiddleSearch.jsx';

function App() {
    return(
        <div className= "App">
            <Sidebar/>
            <MiddleSearch/>
        </div>

    );
}

export default App;