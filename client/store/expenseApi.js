import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const expenseApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
    tagTypes: ['categories', 'transactions'],
    endpoints: (builder)=> ({

        //GET categories
        getCategories: builder.query({
            //GET request on the endpoint
            query: ()=> '/api/categories',
            providesTags: ['categories']
        }),

        //GET labels
        getLabels: builder.query({
            query: ()=> '/api/labels',
            providesTags: ['transactions'] 
        }),

        //POST transaction
        addTransaction: builder.mutation({
            query: (transaction)=> ({
                url: '/api/transaction',
                method: 'POST',
                body: transaction
            }),
            invalidatesTags: ['transactions']
        }),

        //DELETE transaction
        deleteTransaction: builder.mutation({
            query: (transactionID)=> ({
                url: '/api/transaction',
                method: 'DELETE',
                body: transactionID
            }),
            invalidatesTags: ['transactions']
        }),

        // deleteTransacton: builder.query({
        //     query: (id)=> `/api/transaction/${id}`,
        //     invalidatesTags: ['transactions']
        // })
    }), 
})

// export const {getExpense}= expenseApi;
// export const {useGetLabelsQuery} = expenseApi;