import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchColorInfo = createAsyncThunk(
  "search/fetchColorInfo",
  async (query, thunkAPI) => {
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${query}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.hex.value; // Return the hex value from the response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: '',
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColorInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColorInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(fetchColorInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
