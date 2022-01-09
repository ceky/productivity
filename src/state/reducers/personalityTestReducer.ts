const initialState = {
  questions: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'populateQuestions':
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
