function useState(initialState, nextState) {


  if (initialState === nextState) {
    return initialState;
  } else {
    return nextState;
  }
}

export default useState;