const initialState = {
  message: ''
}

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'HELLO_WORLD': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'HELLO_WORLD_AGAIN': {
      return {
        ...state,
        message: action.payload
      }
    }
  }
  return state;
};
