/*
    Recipes -> Class Components

    -> On componentDidMount we fetching all recipes from 'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json' and storing on localStorage to persist data.
    -> While fetching data, based on the response will be showing loading progress to the user
    -> When the user tries to filter recipe from the list by using search input, we highlighting the text which is entered in search fields in all matching recipes from the list
    -> User can be able to navigate recipe details page by clicking on title of recipe.

    1.All the recipes are displayed
    2.The data of each recipe is displayed in a user-friendly way. the recipe card should display at least: recipe's name, headline, image, calories and time.
    3.Each recipe can be favorited or unfavorited
    4.Each recipe can be rated
    5.User can able to filter the recipe based on input search string
    
    state { recipes, isFetching, error, filterText}
    props { }
*/

import React, { Component, Fragment } from 'react';
import logo from '../assets/hellofresh-logo.svg';
import Rating from "../components/Rating";
import SearchBar from "../components/SearchBar";
import Favorite from '../components/Favorite';
import { Link } from "react-router-dom";

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      isFetching: true,
      error: null,
      filterText: null
    };
  }

  getRecipes = () => {
    const url = window.encodeURI('https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json');
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ recipes: json, isFetching: false }, () => {
        localStorage.setItem("recipes", JSON.stringify(json))
      }))
      .catch(error => this.setState({ isFetching: true, error }))
  }

  async componentDidMount() {
    await this.getRecipes();
  }

  handleFilterTextInput = (e) => {
    this.setState({
      filterText: e.target.value
    });
  }

  findMatches = (wordToMatch, recipes) => {
    return recipes.filter(recipe => {
      const regex = new RegExp(wordToMatch, 'gi');
      return recipe.name.match(regex)
    });
  }

  clearText = () => {
    this.setState({
      filterText: ''
    });
  }

  render() {
    const { recipes, isFetching, filterText } = this.state;
    const regex = filterText && new RegExp(filterText, 'gi');
    const recipesList = filterText ? this.findMatches(filterText, recipes) : recipes;

    return (
      <Fragment>
        <header className="Recipes__header">
          <img src={logo} alt="logo" />
          <SearchBar filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput} handleClearText={this.clearText} />
        </header>
        <div className="Recipes__container">
        {!isFetching ? 
          <section className="Recipes__container--cards">
            {recipesList && recipesList.map(recipe => {
              return (
                <article key={recipe.id}>
                  <div className="recipe radius shadowDepth">
                    <div className="recipe__image border-tlr-radius">
                      <img src={recipe.thumb} alt="imageTag" className="border-tlr-radius" />
                    </div>

                    <div className="recipe__content recipe__padding">
                      <Favorite recipeId={recipe.id}/>

                      <article className="recipe__article">
                        <Link to={`recipe/${recipe.id}`} key={recipe.id}>
                          <h2>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: recipe.name.replace(regex, `<strong class="match">${filterText}</strong>`)
                              }} /></h2>
                        </Link>
                        <p>{recipe.headline}</p>
                      </article>
                    </div>
                    <div className="recipe__meta recipe__padding">
                      <span>{recipe.calories}</span>
                      <time>{recipe.time.split('').slice(2).join('')}</time>
                      <Rating recipeId={recipe.id} recipeRating={Math.floor(recipe.rating)} />
                    </div>
                  </div>
                </article>
              )
            })
            }
          </section>
          : <div className="loading"><span></span></div>
          }
        </div>
      </Fragment>
    );
  }
}

export default Recipes;
