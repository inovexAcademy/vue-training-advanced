# Exercise 01 Advanced Reactivity

The goal of this exercise is to learn working with watchers and composables.

## 📝 Tasks

- [ ] `ProductList`:
  - [ ] Use the asynchronous `fetchProducts` instead of `getProducts`
  - [ ] The displayed products should be based on the current `pageSize`, e.g. if `pageSize === 5`, the app should automatically call `fetchProducts(5)` and display the fetched products.
    > 💡 In abstract terms, what does `fetchProducts` represent? Which Vue feature is intended for things like it? 😉

💪 Bonus challenges:

> - [ ] Find a way to move all products related logic into a single place and use that throughout the app.
> - [ ] Ensure that the product fetch request is only done once per selected page size.

## 💡 Help

- Vue documentation:
  - [Watchers](https://vuejs.org/guide/essentials/watchers.html)
  - [Composables](https://vuejs.org/guide/reusability/composables)
