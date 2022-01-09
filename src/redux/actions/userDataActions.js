import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export const setUserDataToRedux = userData => ({
  type: 'SET_USERDATA',
  payload: userData,
});
export const removeUserDataFromRedux = () => ({
  type: 'REMOVE_USERDATA',
});

export const setUserData = () => {
  return dispatch => {
    const user = auth().currentUser;

    database()
      .ref('runningapp')
      .on('value', snapshot => {
        let data = snapshot.child(user.uid).val();
        dispatch(setUserDataToRedux(data));
      });
  };
};
