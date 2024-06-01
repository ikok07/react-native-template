import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().auth.token
    //     if (token) headers.set("Authentication", `Bearer ${token}`)
    //     return headers
    // },
    responseHandler: (response) => {
        // Do something with the response
        // console.log(response)
        return response.json() // MUST RETURN
    },
    validateStatus: (response, result) => {
        return response.status === 200 && result.status !== "success" // add custom validation for successful  response
    }
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1})

export const api = createApi({
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({}),
    tagTypes: ["Posts"]
})
