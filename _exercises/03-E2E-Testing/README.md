# Exercise E2E Testing

The goal of this exercise is to learn writing E2E tests with Playwright.

As a starting point, we created two test files in the `/tests` directory: `add-to-cart.spec.ts` and `product-details.spec.ts`.

> 💡 We recommend running Playwright in [UI mode](https://playwright.dev/docs/test-ui-mode) and already created a start script for you: `pnpm run test:e2e:ui`

## 📝 Tasks

**Try coming up with sensible user flows, then automate and test them with Playwright! You got this!**

<details>
<summary>Otherwise, you can take inspiration from these examples (Click me!)</summary>

- Given an empty shopping cart
  - When the Add-to-Cart Button of Product XYZ is clicked once
    - [ ] Then displays it in the shopping cart once
    - [ ] Then displays the quantity 1
    - [ ] Then displays the correct total
  - When the Add-to-Cart of Product XYZ is clicked twice
    - [ ] Then displays it in the shopping cart once
    - [ ] Then displays the quantity 2
    - [ ] ...
- Given one product in the shopping cart
  - When the Remove Button is clicked
    - [ ] Then removes the product from the shopping cart
    - [ ] Then shows the correct total (0.00)
    - [ ] ...
- Given the Product List page
  - When the card of Product 1 is clicked
    - [ ] Then displays the Product Details page of Product 1
    - [ ] ...
- Given the Product Details page of Product 1
  - When "Go Back to Products" link is clicked
    - [ ] Then displays the Product List page
    - [ ] ...

</details>

## 💡 Help

- Playwright documentation:
  - [Running Playwright Tests in UI Mode](https://playwright.dev/docs/test-ui-mode) (→ `pnpm run test:e2e:ui`)
  - [Test Hooks Reference](https://playwright.dev/docs/api/class-test#test-before-each) (`beforeEach`, `beforeAll`, etc.)
  - [Locators](https://playwright.dev/docs/locators) (`getByRole`, `getByText`, etc.)
  - [Navigations](https://playwright.dev/docs/navigations) (`page.goto('/shopping-cart'`)
  - [Assertions](https://playwright.dev/docs/test-assertions) (`expect(list).toHaveCount(2)`)
