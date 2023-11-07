import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Router>
        <Route path="/"></Route>
      </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;
