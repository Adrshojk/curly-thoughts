import React from "react";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "components/topBar";
import { CurrentUserProvider } from "context/currentUser";

const App = () => {
  return (
    <CurrentUserProvider>
      <div className="App">
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </div>
    </CurrentUserProvider>
  );
};

export default App;
