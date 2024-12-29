import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCorrectAnswer = createAsyncThunk(
  'correctAnswer/fetchCorrectAnswer',
  async () => {
    const response = await axios.get('http://192.168.1.14:8081/api/exams/true/');
    return response.data.correctAnswer;
  }
);

const correctAnswerSlice = createSlice({
  name: 'correctAnswer',
  initialState: {
    value: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCorrectAnswer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCorrectAnswer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload; 
      })
      .addCase(fetchCorrectAnswer.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default correctAnswerSlice.reducer;
