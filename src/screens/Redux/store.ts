import { configureStore } from '@reduxjs/toolkit';
import correctAnswerReducer from './correctAnswerSlice';
import answerReducer from './testAnswerSlice';

const store = configureStore({
  reducer: {
    correctAnswer: correctAnswerReducer,
    answer:answerReducer,
  },
});

export default store;