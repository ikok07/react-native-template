import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import {api} from "./api";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
            [api.reducerPath]: api.reducer,
            postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch) // needed for auto refetch to work

export default store