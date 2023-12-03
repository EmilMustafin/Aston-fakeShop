import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../../types/type';

export const fakestoreApi = createApi({
  reducerPath: 'fake_products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
    }),
    getDetailProduct: builder.query<IProduct, number>({
      query: id => `/products/${id}`,
    }),
    searchProducts: builder.query<IProduct[], string>({
      query: () => `/products`,
      transformResponse: (response: IProduct[], _: FetchBaseQueryMeta | undefined, arg: string) => {
        return [...response.filter(product => product.title.toLowerCase().includes(arg.toLowerCase()))];
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetDetailProductQuery, useSearchProductsQuery } = fakestoreApi;
