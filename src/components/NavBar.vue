<template>
  <div>
    <div id="nav">
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        :name="link.name"
      >
        <img
          class="link_image"
          src="../assets/images/ornament_90_90.png"
          :alt="link.alt"
          @mouseover="routePreview"
          @mouseleave="mouseLeaveHandler"
        />
      </router-link>
    </div>
    <div id="route-preview" v-if="hover">
      <p>{{ routeName }}</p>
    </div>
    <div id="route-name">
      <p>{{ this.$route.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        {
          to: '/',
          name: 'home',
          alt: 'Link to Home page.'
        },
        {
          to: '/mountains',
          name: 'mountains',
          alt: 'Link to Mountains page.'
        },
        {
          to: '/winter',
          name: 'winter',
          alt: 'Link to Winter page.'
        },
        {
          to: '/flora',
          name: 'flora',
          alt: 'Link to Flora page.'
        },
        {
          to: '/fauna',
          name: 'fauna',
          alt: 'Link to Fauna page.'
        },
        {
          to: '/routes',
          name: 'routes',
          alt: 'Link to Routes page.'
        }
      ],
      hover: false,
      routeName: ''
      // touched: false
    }
  },
  methods: {
    routePreview(e) {
      this.hover = true
      this.routeName = e.target.parentElement.name
      setTimeout(() => (this.hover = false), 2500)
    },
    mouseLeaveHandler(e) {
      this.hover = false
    }
    // touchStartHandler(e) {
    // e.preventDefault()
    // this.hover = true
    // },
    // touchEndHandler(e) {
    // if (this.touched) {
    //   return true
    // } else {
    //   e.preventDefault()
    //   this.touched = true
    //   setTimeout(() => (this.hover = false), 2500)
    //   return false
    // }
    // }
  }
}
</script>

<style lang="scss">
#nav {
  position: fixed;
  bottom: 30px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  //padding: 20px 0;
  z-index: 100;

  @media (orientation: landscape) {
    flex-direction: column;
    width: 44px;
    left: initial;
    right: 50px;
    height: 100%;
    padding: 0;
    bottom: 0;

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

#route-name {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  //padding: 1px 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  z-index: 100;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.4) 0%,
    white 50%,
    rgba(255, 255, 255, 0.4) 100%
  );

  p {
    margin: 0;
    font-size: inherit;
    font-weight: 700;
  }

  @media (orientation: landscape) {
    height: 100%;
    width: 40px;
    left: initial;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4) 0%,
      white 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: 1.25rem;
    }
  }
}

#route-preview {
  @extend #route-name;

  bottom: 80px;

  @media (orientation: landscape) {
    height: 100%;
    width: 30px;
    left: initial;
    bottom: 0;
    right: 100px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4) 0%,
      white 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: 1rem;
    }
  }
}
</style>
