import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const data = fetch('https://practice-crud-404316.et.r.appspot.com/')
  console.log(data+"Fetched from https://practice-crud-404316.et.r.appspot.com/");
  return (
    <div>Hello World
    <BrowserRouter>
      <Router>
        <Route path="/"></Route>
      </Router>
    </BrowserRouter>
    <div>
    </div>
    </div>
  );
}

export default App;
