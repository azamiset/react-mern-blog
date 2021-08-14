const initialState = {
  name: 'azami'
}

const globalReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'wandy'
    }
  }
  return state;
}

export default globalReducer;