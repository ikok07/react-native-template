import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { fetchPostsEndpoint } from "./thunks/apiItems/fetchPosts";

const defaultApi = createApi({
    reducerPath: "defaultApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL}),
    endpoints: builder => {
        fetchPostsEndpoint: fetchPostsEndpoint(builder)
    }
})

const store = configureStore({
    reducer: {
            postsReducer,
            [defaultApi.reducerPath]: defaultApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(defaultApi.middleware)
    }
})

export default store