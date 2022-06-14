import './styles/App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'
import RecipeInfo from './components/RecipeInfo';
import AddRecipe from './components/AddRecipe';

import React from 'react';
function App() {
  return (
    <div className='App'>
    <Switch>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path='/recipe/:idRecipe'>
      <RecipeInfo/>
      </Route>

      <Route exact path='/createRecipe'>
      <AddRecipe/>
      </Route>
      <Route exact path="/">
      <Landing/>
      </Route>

    </Switch>
      
    </div>
  );
}

export default App;
