import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipes from "./container/Recipes";
import RecipeDetails from "./container/RecipeDetails";
import NoMatch from "./components/NoMatch";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Recipes}/>
            <Route path="/recipe/:recipeId" component={RecipeDetails}/>
            <Route component={NoMatch}w/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

