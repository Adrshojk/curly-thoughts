import React from 'react';
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import TopBar from 'components/topBar'
const App=()=>{
  return (
    <div className="App">
     <Router>
       <TopBar/>
       <Routes/>
     </Router>
    </div>
  );
}

export default App;
