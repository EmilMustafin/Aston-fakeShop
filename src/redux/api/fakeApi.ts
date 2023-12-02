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
    getCategories: builder.query<IProduct[], string>({
      query: category_id => `/products/category/${category_id}`,
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

export const { useGetProductsQuery, useGetCategoriesQuery, useGetDetailProductQuery, useSearchProductsQuery } =
  fakestoreApi;
