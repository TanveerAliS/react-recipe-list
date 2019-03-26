/*
    Rating -> Class Components
    1.Here we just updating the rating based on user selection and we not persisting this data.

    props { recipeRating, recipeId }
    state { rating }
*/

import React, { Component } from 'react';

const RatingStar = ({active, handleUpdateRating, index}) => {  
    let fill = active ? '#F35369' : '#BEC2C9';
    return (
    <span onClick={((a) => {
            handleUpdateRating(a)
        }).bind(this, index)}>
        <svg xmlns="http://www.w3.org/2000/svg"
        width="15px"
        height="15px"
        viewBox="0 0 12 12">
        <polygon
            fill={fill}
            points="6 8.5200001 2.47328849 10.854102 3.60333748 6.77872286 0.293660902 4.14589803 4.51878111 3.96127709 6 0 7.48121889 3.96127709 11.7063391 4.14589803 8.39666252 6.77872286 9.52671151 10.854102">
        </polygon>
        </svg>
    </span>
    )
}

class Rating extends Component {
    constructor(props) {
      super(props)
      this.state = {
          rating: this.props.recipeRating
      };
    }

    updateRating = (newRating, recipeId) => {
        if (newRating + 1 === this.state.rating) {
          this.setState({ rating: 0})
        } else {
          this.setState({ rating: newRating + 1})
        }
    }

    render(){
        const { recipeId } = this.props;
        const { rating } = this.state;
        const ratingSize = 5;
        const renderRating = () => {
            let output = [];

            for (let i = 0; i < ratingSize; i++) {
                let isActive = i >= rating && i < ratingSize ? false : true;
                output.push(
                    <RatingStar className="rating" key={i}
                        recipeId={recipeId}
                        active={isActive}
                        handleUpdateRating={this.updateRating}
                        index={i}
                    />
                )
            }

            return output;
        }
        return (
            <div className="Rating">{renderRating()}</div>
        )
    }
}

export default Rating;