import React, { Component } from 'react';
import RecipeList from '../recipesComponents/RecipeList';

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RecipeList />
                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard;