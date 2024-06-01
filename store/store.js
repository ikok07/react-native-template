import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import {api} from "./api";

const store = configureStore({
    reducer: {
            [api.reducerPath]: api.reducer,
            postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store