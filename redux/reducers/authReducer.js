const initialState = {
    user: {
      name: 'Arthur'
    }
  };
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        console.log('DISPATCH LOGIN')
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  };