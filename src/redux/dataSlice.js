import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    movies : []
}

export const getAllMovies = createAsyncThunk('getAllMovies', async () => {
    const {data} = await axios.get(import.meta.env.VITE_API_URL);
    return data;
})

const dataSlice = createSlice({
    name : 'data',
    initialState ,
    extraReducers : (builder) => {
        builder.addCase(getAllMovies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.isLoading = false;
        })
    }
})

export default dataSlice.reducer;