import database from '@react-native-firebase/database';


export const setAllUserDataToRedux = allUserData => ({
  type: 'SET_ALLUSERS',
  payload: allUserData,
});
export const removeAllUserDataFromRedux = () => ({
  type: 'REMOVE_ALLUSERS',
});

export const setAllUsersData = () => {
  return (dispatch) => {
    database()
    .ref('runningapp')
    .on('value', snapshot => {
      let users  = []
      snapshot.forEach((child)=>{
        let userData = {id:child.val().id , name: child.val().name , totalDistance: child.val().totalDistance }
        users =[...users , userData]})
        dispatch(setAllUserDataToRedux(users))

    });
  };
};
