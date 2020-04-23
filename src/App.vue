<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="../src/assets/images/ornament-2002422_640.png" alt="">
      </router-link>
      <router-link to="/mountains">
        <img src="../src/assets/images/ornament-2002422_640.png" alt="">
      </router-link>
      <router-link to="/winter">
        <img src="../src/assets/images/ornament-2002422_640.png" alt="">
      </router-link>
      <router-link to="/flora">
        <img src="../src/assets/images/ornament-2002422_640.png" alt="">
      </router-link>
      <router-link to="/fauna">
        <img src="../src/assets/images/ornament-2002422_640.png" alt="">
      </router-link>
      <router-link to="/routes">
        <img src="../src/assets/images/ornament-2002422_640.png" alt="">
      </router-link>
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
    padding: 5px 5px 1px 5px;
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 50%;
    
    img {
      height: 30px;
      width: 30px;
    }

    &.router-link-exact-active {
      border: 2px solid black;
    }
  }
}
</style>
