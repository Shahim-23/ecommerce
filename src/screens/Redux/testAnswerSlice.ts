import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswerState {
  selectedAnswers: { [key: number]: string }; 
}

const initialState: AnswerState = {
  selectedAnswers: {},
};


const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<{ answer: string }>) => {
      const { answer } = action.payload;
      state.selectedAnswers = answer; 
    },
  },
});

export const { saveAnswer } = answersSlice.actions;  
export default answersSlice.reducer;
