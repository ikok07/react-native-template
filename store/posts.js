import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunks/apiItems/fetchPosts";

const postsReducer = createSlice({
    name: "apiItems",
    initialState: {
        items: [],
        selectedItems: [],
        isLoading: false
    },
    reducers: {
        togglePost: (state, action) => {
            if (state.selectedItems.includes(action.payload)) {
                state.selectedItems = state.selectedItems.filter(i => i.id !== action.payload.id)
            } else {
                state.selectedItems.push(action.payload)
            }
        }
    },
    extraReducers: extraReducers
})

const extraReducers = (builder) => {
    fetchPosts(builder)
}

export const {togglePost} = postsReducer.actions
export default postsReducer
