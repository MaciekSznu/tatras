<template>
  <div class="image" :style="image"></div>
</template>

<script>
export default {
  name: 'ImagesBox',
  props: {
    image: Object
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.image {
  width: 100%;
  height: 70%;
  //background: url('../assets/images/five-4359234_1920.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.5;

  @media (orientation: landscape) {
    width: 70%;
    height: 100%;
  }

  @media (min-width: 768px) {
    witdh: 100%;
    height: 100%;

    @media (orientation: landscape) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
