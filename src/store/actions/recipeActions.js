export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('resipes').add({
            ...recipe,
            authorFirstName: 'Jalal',
            authorLastName: 'Testing',
            authorId: 9876,
            createdAt: new Date()
        }).then (() => {
            dispatch({ type: 'CREATE_RECIPE', recipe });
        }).catch ((err) => {
            dispatch({ type: 'CREATE_RECIPE_FAIL', err });
        })  
    }
};