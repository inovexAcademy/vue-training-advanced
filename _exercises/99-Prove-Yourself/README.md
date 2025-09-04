# Exercise 09 Time to Prove Yourself

The goal of this exercise is to use what you have learned in this course.

## 📝 Tasks

Implement the following features:

### Product List:

- [ ]

### Shopping Cart:

- [ ]

### Checkout:

On the checkout page the following can be seen

- [ ]

### Admin page:

- [ ] Add a login page with a username and password field
- [ ] Find a way to store the logged in user
- [ ] Use the `OnyxNavBar` to add a admin page
- [ ] The admin page can only be accessed when the user logged in with the following credentials:
      username: `admin` password: `vue-rocks`
- [ ] On the admin page
  - [ ] The user data can be seen in plain text (username, password)
  - [ ] New products can be added to the inventory
    - [ ] A `OnyxForm` is shown with a product name and price field
    - [ ] A button to submit a product is shown, which adds the defined product to the inventory
    - [ ] Invalid prices (negative or not even numbers) are recognized and the user is presented a hint to please enter only valid price values.

### Testing

- [ ] Add End to end tests for
  - [ ] A user visiting the shop, putting 3 items in the cart, proceeding to checkout and clicking the confirm button
  - [ ] A user who logs in as an admin, visiting the admin page, then adds 2 more products. After that the user navigates to the product list to find his 2 newly added products.
  - [ ] A user who visits the shop, adds to 2 time the same product, then reduces the quantity within the cart, then navigates to the cart view and checks the total sum

### 💪 Bonus challenges:

- [ ] Add unit tests for everything you added
- [ ] Find an efficient way to store the user defined settings for the price range within the local storage

## 💡 Help

- Vitest documentation: [Writing Tests](https://vitest.dev/guide/#writing-tests)
- Vue documentation: [Unit Testing](https://vuejs.org/guide/scaling-up/testing#unit-testing)
- Pinia documentation: [Testing Stores](https://pinia.vuejs.org/cookbook/testing.html)
