import React from 'react';
import Home from 'containers/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from "containers/Game";
import Results from "containers/Results";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/game" exact component={Game} />
          <Route path="/results" exact component={Results} />
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
