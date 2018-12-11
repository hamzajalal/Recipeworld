const initState = {
    recipes: [
        {id:'1', title:'This is the title of recipe one', content: 'whats up my fellas'},
        {id:'2', title:'This is the title of recipe two', content: 'We all are great'},
        {id:'3', title:'This is the title of recipe three', content: 'chuk k rakho'}
    ]
};

const recipeReducer = (state = initState, action) => {
    return state
}

export default recipeReducer;