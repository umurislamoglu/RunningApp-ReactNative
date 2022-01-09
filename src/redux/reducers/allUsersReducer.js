let initialState = {
  allUsers: [],
};

const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALLUSERS':
      return {...state, allUsers: action.payload};

    case 'REMOVE_ALLUSERS':
      return {...state, allUsers: []};

    default:
      return state;
  }
};

export default allUsersReducer;
