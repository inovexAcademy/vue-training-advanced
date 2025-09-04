# Exercise 04 Api Client and Mocking

The goal of this exercise is to learn how to use a api client and mock data that is not available yet.

## 📝 Tasks

- [ ] Generate an API client:
  - [ ] Generate the api client from the given products specification file (`/apiSpecification/product.spec.ts`).
    > ℹ️ All needed packages are already installed in the repo. The script command for generating the spec can be found in the package.json
  - [ ] Use the generated client to fetch products. Replace the old fetch call with it.

- [ ] Add Reviews (`ProductView.vue`):
  - [ ] Add a section for reviews to product details page
  - [ ] Find where you can get the product reviews and render them

☝️ As the service is not ready yet, we need to mock ourselves the ai endpoint to get summaries of the reviews.

- [ ] Mock AI summary:
  - [ ] Setup MSW to be enabled under development (check the docs)
    > ℹ️ All needed packages are already installed in the repo.
  - [ ] Configure a mock for the HTTP GET method. The AI summary we need will be available under
        `/api/ai/reviews/[id]/summary`
  - [ ] Think of a good place for where to handle ai related data in your app
  - [ ] Add a fetch call there for the ai summary
  - [ ] Render the ai summary text above the reviews. Add a info mark that the text is created by AI.

- [ ] 💪 Bonus challenges:
  - [ ] Implement proper error handling for the fetch
  - [ ] Add a loading state

## 🖼️ Example Result

![Example Result](src/assets/result.png)

## 💡 Help

- Vue documentation:
  - [HeyApiClient](https://heyapi.dev/)
  - [MockServiceWorker](https://mswjs.io/)
  - [Vue](https://vuejs.org/)
