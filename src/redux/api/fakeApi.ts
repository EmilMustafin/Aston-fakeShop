import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../../interfaces/types';

export const fakestoreApi = createApi({
  reducerPath: 'fake_products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
    }),
    getCategories: builder.query<IProduct[], string>({
      query: category_id => `/products/category/${category_id}`,
    }),
    getDetailProduct: builder.query<IProduct, number>({
      query: id => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetDetailProductQuery } = fakestoreApi;
