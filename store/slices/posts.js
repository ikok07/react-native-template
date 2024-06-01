import { createSlice } from "@reduxjs/toolkit";
import {api} from "../api";

const postsReducer = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        selectedItems: [],
        isLoading: false
    },
    reducers: {
        togglePost: (state, action) => {
            if (state.selectedItems.findIndex(i => i.id === action.payload?.id) >= 0)  {
                state.selectedItems = state.selectedItems.filter(i => i.id !== action.payload.id)
            } else {
                state.selectedItems.push(action.payload)
            }
        },
        savePosts: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const postsApi = api.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: id => `/posts${id ? `/${id}` : ""}`,
            providesTags: ["Posts"]
        }),
        createPost: builder.mutation({
            query: post => ({
                url: "/posts",
                method: "POST",
                body: {post}
            }),
            invalidatesTags: ["Posts"]
        })
    })
})

export const {togglePost, savePosts} = postsReducer.actions
export default postsReducer.reducer
export const { useGetPostsQuery, useCreatePostMutation } = postsApi
