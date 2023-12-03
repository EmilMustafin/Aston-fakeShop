# ASTON Fake Store

На базе [**Fake Store API**](https://fakestoreapi.com/) от MohammadReza Keikavousi

Реализовано: Мустафин Э.И.

### Deploy link
[Fake Store](https://aston-fakeshop.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/62ca21af-e129-45ab-9255-498327c9f84f/deploy-status)](https://app.netlify.com/sites/aston-fakeshop/deploys)



## Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

## React

-   Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется FireBase
-   Функциональные компоненты с хуками в приоритете над классовыми [components](https://github.com/EmilMustafin/Aston-fakeShop/tree/main/src/components), [pages](https://github.com/EmilMustafin/Aston-fakeShop/tree/main/src/pages)
-   Есть разделение на умные и глупые компоненты:
    -   Умные: [CardsProducts] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/CardProducts/CarProducts.tsx)
    -   Глупые: [CarsItems] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/CardsItems/CardsItems.tsx)
-   Есть рендеринг списков [CardProducts] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/CardProducts/CarProducts.tsx)
-   Реализована хотя бы одна форма [Signup] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/pages/SignUp/SignupPage.tsx)
-   Есть применение Контекст API [themeProvider] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/providers/ThemeProvider.tsx)
-   Есть применение предохранителя [ErrorBoundary] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/ErrorBoundary/ErrorBoundary.tsx), [Fallback](https://github.com/umkurius/aston-project/blob/main/src/components/fallback/Fallback.tsx)
-   Есть хотя бы один кастомный хук [useDispatch] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/hooks/useDispatch.ts), [useDebounce](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/hooks/useDebounce.tsx),[useThemeContext](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/hooks/useThemeContext.tsx)
-   Хотя бы несколько компонентов используют PropTypes [Button](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/Star/Star.tsx), [FavoriteList](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/FavoriteList/FavoriteList.tsx)
-   Поиск не должен триггерить много запросов к серверу [SearchPanel](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/components/SearchForm/SearchForm.tsx),
-   Есть применение lazy + Suspense [Router](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/App.tsx)

## Redux

-   Используется Modern Redux with Redux Toolkit [store](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/redux/store.ts)
-   Используется слайсы [userSlice] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/redux/slices/userSlice.ts)
-   Есть хотя бы одна кастомная мидлвара [userMiddleware](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/redux/middleware/customMiddleware.ts)
-   Используется RTK Query [fakeapi] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/redux/api/fakeApi.ts)
-   Используется Transforming Responses [fakeapi](https://github.com/EmilMustafin/Aston-fakeShop/blob/main/src/redux/api/fakeApi.ts)

## 2 уровень (необязательный)

-   Используeтся TypeScript[tsconfig.json] (https://github.com/EmilMustafin/Aston-fakeShop/blob/main/tsconfig.json)
-   Используется Firebase для учетных записей пользователей и их Избранного и Истории поиска.
-   Настроен CI/CD [.github] (https://github.com/EmilMustafin/Aston-fakeShop/tree/main/.github)
