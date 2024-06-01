import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = (builder) => {
    builder.addCase(fetch.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
    })
    builder.addCase(fetch.rejected, (state, action) => {
        console.log(action.payload)
        state.isLoading = true
    })
    builder.addCase(fetch.pending, (state) => {
        state.isLoading = true
    })
}

export const fetchPostsEndpoint = (builder) => ({
    fetchPosts: builder.query({
        query: "/posts"
    })
})

const fetch = createAsyncThunk("posts/fetch", async () => {
    
})