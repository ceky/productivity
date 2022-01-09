export const saveQuestions = (questions: any) => {
  return {
    type: 'populateQuestions',
    payload: questions,
  };
};
