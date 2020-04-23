<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">@</router-link>
      <router-link to="/mountains">@</router-link>
      <router-link to="/winter">@</router-link>
      <router-link to="/flora">@</router-link>
      <router-link to="/fauna">@</router-link>
      <router-link to="/routes">@</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
}

#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 20px 0;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
