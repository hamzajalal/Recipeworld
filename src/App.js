import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layoutComponents/Navbar';
import Dashboard from './components/dashboardComponents/Dashboard';
import RecipeDetails from './components/recipesComponents/RecipeDetails';
import SignIn from './components/authenticationComponents/SignIn';
import SignUp from './components/authenticationComponents/SignUp';
import CreateRecipe from './components/recipesComponents/CreateRecipe';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/recipe/:id' component={RecipeDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreateRecipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
