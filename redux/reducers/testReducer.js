const initialState = {
    counter: 10,
    counterMultiplied: 100
}

const testReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + action.constant,
                counterMultiplied: (state.counter + action.constant)*10
            }

        case 'DECREASE_COUNTER':
            return {
                ...state,
                counter: state.counter -1,
                counterMultiplied: (state.counter + -1)*10
            }

    }

    return state
}

export default testReducer;
