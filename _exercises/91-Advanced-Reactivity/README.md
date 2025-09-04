# Exercise 01 Advanced Reactivity

The goal of this exercise is to learn how to use watchers and work with localStorage.

## 📝 Tasks

- [ ] `ProductList`:
  - [ ] Use the asynchronous `fetchProducts` instead of `getProducts`
  - [ ] The displayed products should be based on the current `pageSize`, e.g. if `pageSize === 5` then `fetchProducts(5)` then display the fetched products.
    > ⚠️ You are only allowed to use `fetchProducts` in one place! Which Vue concept could help us achieve this? 😉
  - [ ] Persist `pageSize` in the localStorage. Use the persisted `pageSize` as the initial value on page load, e.g. with the help of `useStorage` from `@vueuse`.

> - [ ] 💪 Bonus challenge: Replace the Pinia store `shoppingCart` with a custom composable without using `defineStore`. For example, call it `useShoppingCart`.

## 💡 Help

- Vue documentation:
  - [Watchers](https://vuejs.org/guide/essentials/watchers.html)
  - [Composables](https://vuejs.org/guide/reusability/composables)
