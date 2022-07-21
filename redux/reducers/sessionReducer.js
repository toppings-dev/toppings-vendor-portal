const initialState = {
    recs: [],
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SESSION_DATA':
            return {
                recs: action.recs || state.recs
            }
        default:
            return state

    }

    return state
}

export default sessionReducer;