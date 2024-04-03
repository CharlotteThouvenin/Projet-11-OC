

export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token,
});

export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    payload: userInfo,
});

export const RESET_STORE = 'RESET_STORE';

export const resetStore = () => ({
    type: RESET_STORE,
});

export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export const updateUsername = (userName) => ({
    type: UPDATE_USERNAME,
    payload: userName,
});