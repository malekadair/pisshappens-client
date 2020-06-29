import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./routes/HomePage/HomePage"
import ComicsListPage from "./routes/ComicsListPage/ComicsListPage"
import ComicPage from './routes/ComicPage/ComicPage';

// import PrivateRoute from "../src/Utils/PrivateRoute"
// import PublicOnlyRoute from "../src/Utils/PublicOnlyRoute";

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1>PissHappens</h1>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <PublicOnlyRoute path='/login' component={LoginPage} /> */}
          {/* <PublicOnlyRoute path='/register' component={RegisterPage} /> */}
          <Route exact path='/comics' component={ComicsListPage} />
          <Route path='/comics/:comicId' component={ComicPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
