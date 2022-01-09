import auth from '@react-native-firebase/auth';

export const setLoginDataToRedux = userAuth => ({
  type: 'LOGIN',
  payload: userAuth,
});
export const logoutDataFromRedux = () => ({
  type: 'LOGOUT',
});

export const loginUser = () => {
  const user = auth().currentUser;
  return dispatch => {
    dispatch(setLoginDataToRedux(user));
  };
};
