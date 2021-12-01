const initialState = {
    sharedState: null,
};

function rootReducer(state = initialState, action) {
    if (!state) {
        return null;
    } else {
        return {...state, [action.key]: action.payload};
    }
}

export default rootReducer;
