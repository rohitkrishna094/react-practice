// Usually we return an object. But using thunk we can return
// a function. The advantage of this is that we can now halt
// the flow and run async code just before we go to reducer
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db do async
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        // and now dispatch it back
        dispatch({ type: 'CREATE_PROJECT', project: project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
