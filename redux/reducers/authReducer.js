const initialState = {
    user: {
      name: 'Arthur'
    }
  };
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        console.log('nao veio aqui mano')
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  };