import React from 'react';
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
const App=()=>{
  return (
    <div className="App">
     <h3> Welcome to Curly Thoughts</h3>
     <Router>
       <Routes/>
     </Router>
    </div>
  );
}

export default App;
