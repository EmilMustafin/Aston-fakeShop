# ASTON Fake Store
### Deploy link
[Fake Store](https://aston-fakeshop.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/62ca21af-e129-45ab-9255-498327c9f84f/deploy-status)](https://app.netlify.com/sites/aston-fakeshop/deploys)



## Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

## React

-   Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется FireBase
-   Функциональные компоненты с хуками в приоритете над классовыми [components](https://github.com/umkurius/aston-project/tree/main/src/components), [pages](https://github.com/umkurius/aston-project/tree/main/src/pages)
-   Есть разделение на умные и глупые компоненты:
    -   Умные: [SearchPanel](https://github.com/umkurius/aston-project/blob/main/src/components/search-panel/SearchPanel.tsx)
    -   Глупые: [Button](https://github.com/umkurius/aston-project/blob/main/src/components/button/Button.tsx)
-   Есть рендеринг списков [PostList](https://github.com/umkurius/aston-project/blob/main/src/components/post-list/PostList.tsx)
-   Реализована хотя бы одна форма [Signup](https://github.com/umkurius/aston-project/blob/main/src/pages/Signup/Signup.tsx)
-   Есть применение Контекст API [themeProvider](https://github.com/umkurius/aston-project/blob/main/src/provider/themeProvider.tsx)
-   Есть применение предохранителя [index](https://github.com/umkurius/aston-project/blob/main/src/index.tsx), [Fallback](https://github.com/umkurius/aston-project/blob/main/src/components/fallback/Fallback.tsx)
-   Есть хотя бы один кастомный хук [useActions](https://github.com/umkurius/aston-project/blob/main/src/hooks/useActions.ts), [useDebounce](https://github.com/umkurius/aston-project/blob/main/src/hooks/useDebounce.ts)
-   Хотя бы несколько компонентов используют PropTypes [Button](https://github.com/umkurius/aston-project/blob/main/src/components/button/Button.tsx), [PostListItem](https://github.com/umkurius/aston-project/blob/main/src/components/post-list-item/PostListItem.tsx)
-   Поиск не должен триггерить много запросов к серверу [SearchPanel](https://github.com/umkurius/aston-project/blob/main/src/components/search-panel/SearchPanel.tsx),
-   Есть применение lazy + Suspense [Router](https://github.com/umkurius/aston-project/blob/main/src/router/Router.tsx)

## Redux

-   Используется Modern Redux with Redux Toolkit [store](https://github.com/umkurius/aston-project/blob/main/src/store/store.ts)
-   Используется слайсы [userSlice](https://github.com/umkurius/aston-project/blob/main/src/store/slices/userSlise.ts)
-   Есть хотя бы одна кастомная мидлвара [userMiddleware](https://github.com/umkurius/aston-project/blob/main/src/store/userMiddleware.ts)
-   Используется RTK Query [api](https://github.com/umkurius/aston-project/blob/main/src/store/api/api.ts)
-   Используется Transforming Responses [api](https://github.com/umkurius/aston-project/blob/main/src/store/api/api.ts)

## 2 уровень (необязательный)

-   Используeтся TypeScript