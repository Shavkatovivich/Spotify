/* eslint-disable indent */
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
            baseUrl: "https://shazam-core.p.rapidapi.com/v1",
            prepareHeaders: (headers) => {
                headers.set("X-RapidAPI-Key", 'b7f143420fmsh062e9efc879faf2p11c605jsn04adb01e6b8d');
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => "/charts/world"}),
        }),
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi