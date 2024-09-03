import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchColors = createAsyncThunk('search/fetchColors', async (query) => {
    const response = await fetch(`https://api.react-colorful/${query}`);
    const data = await response.json();
    return data;
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: {
        [searchColors.pending]: (state) => {
            state.status = 'loading';
        },
        [searchColors.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.searchResults = action.payload;
        },
        [searchColors.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export default searchSlice.reducer;