import React from "react";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "components/topBar";
import { CurrentUserProvider } from "context/currentUser";
import CurrentUserChecker from 'components/currentUserChecker'
const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
      <div className="App">
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </div>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

export default App;
