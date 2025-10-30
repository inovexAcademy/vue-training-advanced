<template>
  <div class="app">
    <h1>App.vue</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/settings">Settings</router-link>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  padding: 10vmin;
  box-sizing: border-box;
  border-radius: 32px;
  background: #42b883ff;
  width: 95vw;
  height: 95vh;
}

main {
  height: calc(100% - 40px);
}
</style>
