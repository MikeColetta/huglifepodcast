import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path= "/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}


export default App;
