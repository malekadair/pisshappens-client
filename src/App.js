import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./routes/HomePage/HomePage"
import ComicsListPage from "./routes/ComicsListPage/ComicsListPage"
import ComicPage from './routes/ComicPage/ComicPage';

// import PrivateRoute from "../src/Utils/PrivateRoute"
// import PublicOnlyRoute from "../src/Utils/PublicOnlyRoute";

const App = () => {
  const [title, setTitle] = useState('blah')

  console.log(title)
  if (title === 'blah') {

    setTitle('purple')
    console.log(title)
    setTitle('happy')
  }
  console.log(title)

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

export default App;
