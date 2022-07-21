const initialState = {
    interests: {},
    userCanPassSetupGate: false,
    handle: "",
    profilePic: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    extraData: false,
    firebaseVerificationID: null,
    firebaseAuthResult: {},
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FIREBASE_VERIFICATIONID':
            return {
                ...state,
                firebaseVerificationID: action.firebaseVerificationID
            }
        case 'UPDATE_FIREBASE_AUTHRESULT':
            return {
                ...state,
                firebaseAuthResult: action.firebaseAuthResult
            }
        case 'UPDATE_INTERESTS':
            return {
                ...state,
                interests: action.interests,
                extraData: !state.extraData
            }

        case 'UPDATE_HANDLE':
            return {
                ...state,
                handle: action.handle,
                extraData: !state.extraData
            }
        case 'UPDATE_FIRSTNAME':
            return {
                ...state,
                firstName: action.firstName,
                extraData: !state.extraData
            }

        case 'UPDATE_LASTNAME':
            return {
                ...state,
                lastName: action.lastName,
                extraData: !state.extraData
            }

        case 'UPDATE_PHONENUMBER':
            return {
                ...state,
                phoneNumber: action.phoneNumber,
                extraData: !state.extraData
            }

        case 'UPDATE_PROFILEPIC':
            return {
                ...state,
                profilePic: action.profilePic
            }

        case 'CLEAR_USERDATA':
            return initialState
    }

    return state
}

export default profileReducer;