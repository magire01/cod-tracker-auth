import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={LoginScreen} />
      <Route exact path={"/signup"} component={SignupScreen} />
    </Router>
  );
}

export default App;
