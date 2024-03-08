import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk('counter/fetchUser', async () => {
 
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
 
   return response.json();
 });

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Your existing reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchUser };
export default counterSlice.reducer;
