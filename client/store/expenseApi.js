import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const expenseApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
    endpoints: (builder)=> ({

        //GET categories
        getCategories: builder.query({
            //GET request on the endpoint
            query: ()=> '/api/categories'
        }),

        //GET labels
        getLabels: builder.query({
            query: ()=> '/api/labels'
        }),

        //POST transaction
        addTransaction: builder.mutation({
            query: (transaction)=> ({
                url: '/api/transaction',
                method: 'POST',
                body: transaction
            })
        }),

        //DELETE transaction
        deleteTransaction: builder.mutation({
            query: (recordID)=> ({
                url: '/api/transaction',
                method: 'DELETE',
                body: recordID
            })
        })
    }), 
})

// export const {getExpense}= expenseApi;
// export const {useGetLabelsQuery} = expenseApi;