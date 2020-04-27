<template>
  <div id="app">
    <!-- <transition name="nav-fade" appear> -->
    <div id="nav">
      <router-link to="/">
        <img src="../src/assets/images/ornament_90_90.png" alt="" />
      </router-link>
      <router-link to="/mountains">
        <img src="../src/assets/images/ornament_90_90.png" alt="" />
      </router-link>
      <router-link to="/winter">
        <img src="../src/assets/images/ornament_90_90.png" alt="" />
      </router-link>
      <router-link to="/flora">
        <img src="../src/assets/images/ornament_90_90.png" alt="" />
      </router-link>
      <router-link to="/fauna">
        <img src="../src/assets/images/ornament_90_90.png" alt="" />
      </router-link>
      <router-link to="/routes">
        <img src="../src/assets/images/ornament_90_90.png" alt="" />
      </router-link>
    </div>
    <!-- </transition> -->
    <router-view id="view" />
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
}

// .nav-fade-enter {
//   opacity: 0;
//   // scale: 0;
// }
// .nav-fade-enter-to {
//   opacity: 1;
//   // scale: 1;
// }
// .nav-fade-enter-active {
//   transition: opacity 2s ease-out;
// }
// .nav-fade-leave-to {
//   opacity: 0;
//   // scale: 0;
// }
// .nav-fade-leave-active {
//   transition: opacity 2s ease-ins;
// }

#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  z-index: 100;

  @media (orientation: landscape) {
    flex-direction: column;
    width: 44px;
    left: calc(100vw - 44px - 1rem);
    height: 100%;
    padding: 0;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 21px;
      height: calc((100vh - 6 * 44px - 80px) / 2);
      width: 2px;
      background-color: #c6d1ca;
      border-radius: 1px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 20px;
      left: 21px;
      height: calc((100vh - 6 * 44px - 80px) / 2);
      width: 2px;
      background-color: #c6d1ca;
      border-radius: 1px;
    }
  }

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
      border: none;
      border-radius: 15px;
      filter: invert(98%) sepia(6%) saturate(390%) hue-rotate(69deg)
        brightness(88%) contrast(85%);
    }

    &.router-link-exact-active {
      border: 2px solid #c6d1ca;
    }
  }
}
</style>
