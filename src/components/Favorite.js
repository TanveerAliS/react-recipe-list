/*
    Favorite -> Class Components
    1.We are storing the favorited recipes in localStorage 
    2.Using 'recipeId' props value to check whether the recipe is favorited.
    
    props { recipeId }
    state { isFavorite }
*/

import React, {Component} from 'react';
class Favorite extends Component {
    constructor(props) {
      super(props)
      this.state = {
          isFavorite: false
      };
    }

    handleIsFavorite = () => {
        let favoriteRecipes = localStorage.getItem('favoriteRecipes') ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];
        !this.state.isFavorite ? favoriteRecipes.push(this.props.recipeId) : favoriteRecipes.splice(favoriteRecipes.findIndex( id => id === this.props.recipeId), 1)
        localStorage.setItem('favoriteRecipes', JSON.stringify([...new Set(favoriteRecipes)]))
        this.setState( prevState => { 
            return  { isFavorite: !prevState.isFavorite }
        })
    }

    render(){
        const { recipeId } = this.props;
        const favoriteRecipes = localStorage.getItem('favoriteRecipes') ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];
        const isFavorited = favoriteRecipes.findIndex( id => id === recipeId) === -1 ? false : true;
        return (
            <div className="Favorite">
                <span className="Favorite--toggle" href="#" onClick={this.handleIsFavorite}>
                    <i className={`${isFavorited ? 'fas' : 'far'} fa-heart`}></i>
                </span>
            </div>
        )
    }
}

export default Favorite;