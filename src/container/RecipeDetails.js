/*
    RecipeDetails -> Function Components

    ->We reading the recipe ID from route and fetching the all details from localStorage which is persisted during Recipe component load.

    1. This is used to display recipe details, this page display description, ingredients, fats, calories, proteins, carbs and preparation time.
    2. Each recipe can be favorited or unfavorited
    3. Each recipe can be rated

    props { location }
*/

import React from 'react';
import { Link } from "react-router-dom";
import Favorite from '../components/Favorite';
import Rating from "../components/Rating";

const RecipeDetails = ({location}) =>{

    const recipes  = JSON.parse(localStorage.getItem("recipes")) || [];
    const id = location && location.pathname.split('/')[2];
    const recipe = recipes.find(recipe => recipe.id === id);
    return (
      <div className="RecipeDetails">
        {recipe && 
              <div className="RecipeDetails__wrapper">
              <Link to="/"><div className="RecipeDetails--goback"><i className="fa fa-arrow-left"></i></div></Link>
              <div className="RecipeDetails__left">
                <div className="RecipeDetails__left__info">
                  <div className="RecipeDetails__left__title">{recipe.name}</div>
                  <div className="RecipeDetails__left__headline">{recipe.headline}</div>
                </div>
                <div className="RecipeDetails__left__image">
                  <img src={recipe.image} alt=""/>
                  <Rating recipeId={recipe.id} recipeRating={Math.floor(recipe.rating)} />
                </div>
              </div>
              <div className="RecipeDetails__right">
                <div className="RecipeDetails__right__description">{recipe.description}</div>
                <div className="RecipeDetails__right__ingredients">
                  <h1>Ingredients</h1>
                  <ul>
                      {recipe.ingredients.map((ingredient, i) => (
                          <li key={i}>{ingredient}</li>
                      ))}
                  </ul>
                </div>
            </div>
            <div className="RecipeDetails__favorite">
              <Favorite recipeId={recipe.id}/>
            </div>
            <div className="RecipeDetails__bottom">
                <div className='RecipeDetails__bottom__meta'>
                  <ul>
                      {recipe.fats && <li><span className="fa">Fats</span>{recipe.fats}</li>}
                      {recipe.calories && <li><span className="fa">Calories</span>{recipe.calories}</li>}
                      {recipe.proteins && <li><span className="fa">Proteins</span>{recipe.proteins}</li>}
                      {recipe.carbos && <li><span className="fa">Carbs</span>{recipe.carbos}</li>}
                      {recipe.time && <li><span className="fa">Preparation time</span>{recipe.time.split('').slice(2).join('')}</li>}
                  </ul>
                </div>
              </div>
          </div>
        }
      </div>
    );
//   }
}

export default RecipeDetails;
