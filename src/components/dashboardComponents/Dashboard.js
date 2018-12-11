import React, { Component } from 'react';
import RecipeList from '../recipesComponents/RecipeList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render () {

        const { recipes } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RecipeList recipes={recipes} />
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes
});

export default connect(mapStateToProps)(Dashboard);