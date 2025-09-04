# Exercise 93 Advanced Pinia with Local Storage

The goal of this exercise is to learn how to persist state in local storage together with pinia.

## 📝 Tasks

- [ ] Add a new view for user settings:
  - [ ] Add a new route for `/user-settings`: This route should load the `UserSettingsView.vue` component.
    > 💡 We already added a partially implemented `UserSettingsView.vue` in `/views`
- [ ] Set up the link to the user settings page within the HomeView (beside the admin link)
- [ ] Find a place for where to add the user settings state
  - [ ] Add a state variable for the users name (default is 'Guest')
  - [ ] Add a state variable for the theme
- [ ] On the UserSettingsView the user can type in his user name in an input.
- [ ] On the UserSettingsView the user can switch between 'dark' and 'light' theme
- [ ] Now this theme selection should stay persisted upon refresh (tab close)
  > ℹ️ The user name should not be persisted

### 💪 Bonus challenge:

- [ ] Find a way to bind the selected theme with the actual color scheme so that the colors adjust dynamically.

## 🖼️ Example Result

![Example Result](src/assets/example-result.png)

## 💡 Help

- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
