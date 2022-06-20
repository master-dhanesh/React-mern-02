import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: 1,
    posts: [],
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        changeByAmount: (state, action) => {
            state.value += action.payload;
        },
        fetchPosts: async (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { decrement, increment, changeByAmount, fetchPosts } =
    counterSlice.actions;
export default counterSlice.reducer;

export const fetchPostsAsync = () => (dispatch, getState) => {
    console.log(getState());
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((d) => dispatch(fetchPosts(d.data)))
        .catch((err) => console.log(err));
};
