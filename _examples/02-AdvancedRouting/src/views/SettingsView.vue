<template>
  <div class="settings">
    <h2>Settings</h2>
    <nav>
      <router-link to="/settings/language">Language</router-link> |
      <router-link to="/settings/theme">Theme</router-link> |
      <router-link to="/settings/admin">Admin</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.settings {
  padding: 16px;
  border-radius: 16px;
  background: #40a0a4ff;
  height: 80%;
}
</style>
