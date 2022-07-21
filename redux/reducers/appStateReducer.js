const initialState = {
    darkMode: true,
}

const appStateReducer = (state = initialState, action) => {
    switch (action.type){
        case 'TOGGLE_APPEARANCE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
    }

    return state
}

export default appStateReducer;
