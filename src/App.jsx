// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from "./components/Countries";
import countriesdetails from "./components/countriesdetails"; // Adjusted import path

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-8">Countries Information</h1>
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/country/:countryCode" component={countriesdetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
