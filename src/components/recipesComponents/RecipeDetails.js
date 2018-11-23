import React from 'react'

const RecipeDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section recipe-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Recipe Title - {id}</span>
                <p>Just a tested data hard-codded;</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Jalal Hamza</div>
                <div>21st November, 2018</div>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails;



