var dateFormat = require('dateformat');
var add = require('date-fns/add')

const initialState = {
    searchTerm: "",
    searchResults: [],
    extraD: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE_SEARCH_DATA':
            return {
                searchTerm: action.searchTerm == undefined ? state.searchTerm : action.searchTerm,
                extraD: !state.extraD,
                searchResults: action.searchResults || state.searchResults,
            }

        case 'RESET_INTERACTION_DATA':
            return initialState

    }

    return state
}

export default searchReducer;
