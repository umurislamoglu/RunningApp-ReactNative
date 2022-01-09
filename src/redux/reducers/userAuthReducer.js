let initialState = {
  userAuth: {},
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, userAuth: action.payload};

    case 'LOGOUT':
      return {...state, userAuth: {}};

    default:
      return state;
  }
};

export default userAuthReducer;

