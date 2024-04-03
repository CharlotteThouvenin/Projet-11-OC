import { setUserInfo } from "../../actions";

export async function fetchUserInfo(token, dispatch) { // Add dispatch as a parameter
    let userInfoData;

    try {
        const userInfoResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
        userInfoData = await userInfoResponse.json();
        dispatch(setUserInfo(userInfoData.body));

    } catch (error) {
        console.error('Error fetching user info:', error);
    }

    return userInfoData;
};
