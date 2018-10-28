// Usually we return an object. But using thunk we can return
// a function. The advantage of this is that we can now halt
// the flow and run async code just before we go to reducer
export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to db
    // do async

    // and now dispatch it back
    dispatch({ type: 'CREATE_PROJECT', project: project });
  };
};
