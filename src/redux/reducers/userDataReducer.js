let initialState = {
  userData: {},
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERDATA':
      return {...state, userData: action.payload};

    case 'REMOVE_USERDATA':
      return {...state, userData: []};

    default:
      return state;
  }
};

export default userDataReducer;