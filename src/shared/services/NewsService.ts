import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { NewsType } from '../models/Models'
import { API_BASE_URL } from '../Constants'

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}` }),
    endpoints: (builder) => ({
        fetchAllNews: builder.query<NewsType[], string>({
            query: () => ({
                url: '/news'
            }),
        }),
    })
})