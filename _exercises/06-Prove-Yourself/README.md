# Exercise 06 Time to Prove Yourself

The goal of this exercise is to use what you have learned in this course.

## 📝 Tasks

Implement the following features:

### Product List:

- [ ] Implement a pagination navbar for showing the other pages of products
- [ ] Implement a async pagination behavior for that (always only fetching the products that are rendered)

### Shopping Cart:

- [ ] Render the price of each product within its card below the title.
- [ ] For each product, render also the subtotal price below the quantity.
- [ ] Refactor the action of the trash-icon to remove the whole product from the cart.
- [ ] Add a ui component of your choice to change the number of the quantity (within a range of 0-99).

### Checkout:

- [ ] Define a new endpoint for the 'Complete Purchase' action.
- [ ] Mock that endpoint to return a success or error result which occur in a relation of 1/5.
- [ ] If the response is success: render a success notification and clear the products.
- [ ] If the response is error: render an error notification and keep the products.

### Admin page:

- [ ] Refactor the admin page to have a username and password field
- [ ] Find a way to store the logged in user
- [ ] The admin page can only be accessed when the user logged in with the following credentials:
      username: `admin` password: `vue-rocks`
- [ ] On the admin page
  - [ ] The user data can be seen in plain text (username, password)
  - [ ] A blacklist for products can be defined
        Behavior: The blacklist filters out all products from the rendered list that
    - A: if only name is set: filters products by that start string
    - B: if only a price range is set: filters all products that lay between that range
    - C: if both, name and price range are set: filters out all products that have the name starting with the given string AND its price is within the range.
    - [ ] A `OnyxForm` is shown with a product name input field, as well as a price-from and price-to fields
    - [ ] A button to add a product to the blacklist is shown, which filters the defined product from the list of rendered products
    - [ ] Invalid prices (negative or not even numbers) are detected as invalid and the user is presented a hint to please enter only valid price values.

### Testing

- [ ] Add End to end tests for
  - [ ] A user visiting the shop, putting 3 items in the cart, proceeding to checkout and clicking the confirm button
  - [ ] A user who logs in as an admin, visiting the admin page, then adds 2 more products. After that the user navigates to the product list to find his 2 newly added products.
  - [ ] A user who visits the shop, adds to 2 times the same product by accident, then reduces the quantity within the cart, then navigates to the cart view and checks the total sum

### 💪 Bonus challenges:

- [ ] Add tests for everything you added, decide yourself which kind of tests you want to add (unit, e2e)
- [ ] Find an efficient way to store the user defined settings for the price range within the local storage

## 💡 Help

- Vitest documentation: [Writing Tests](https://vitest.dev/guide/#writing-tests)
- Vue documentation: [Unit Testing](https://vuejs.org/guide/scaling-up/testing#unit-testing)
- Playwright documentation: [Playwright Tests](https://playwright.dev/docs/writing-tests)
- Pinia documentation: [Testing Stores](https://pinia.vuejs.org/cookbook/testing.html)
