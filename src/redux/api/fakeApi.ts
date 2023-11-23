import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProductsProps } from '../../inerfaces/IfakeProducts';

export const fakestoreApi = createApi({
  reducerPath: 'fake_products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: builder => ({
    getProducts: builder.query<IProductsProps[], void>({
      query: () => `/products`,
    }),
    getCategories: builder.query<IProductsProps[], string>({
      query: category_id => `/products/category/${category_id}`,
    }),
    getDetailProduct: builder.query<IProductsProps[], string>({
      query: id => `/products/category/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetDetailProductQuery } =
  fakestoreApi;
