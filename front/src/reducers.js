import { SET_TOKEN, SET_USER_INFO, RESET_STORE, UPDATE_USERNAME } from './actions';

const initialState = {
    token: null,
    userInfo: {
        firstName: '',
        lastName: '',
        userName: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case RESET_STORE:
            return initialState;

        case UPDATE_USERNAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userName: action.payload,
                },
            };
        default:
            return state;
    }
};


export default reducer;