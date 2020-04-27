<template>
  <vue-flux
    class="image"
    :options="options"
    :images="images"
    :transitions="transitions"
    :captions="captions"
  >
    <template v-slot:preloader>
      <flux-preloader />
    </template>

    <template v-slot:caption>
      <flux-caption v-slot="captionProps">
        {{ captionProps }}
      </flux-caption>
    </template>

    <!-- <template v-slot:controls>
      <flux-controls />
    </template> -->
  </vue-flux>
</template>

<script>
import { VueFlux, FluxCaption, FluxPreloader } from 'vue-flux'

export default {
  name: 'ImagesBox',
  components: {
    VueFlux,
    FluxCaption,
    // FluxControls,
    FluxPreloader
  },
  props: {
    options: Object,
    images: Array,
    transitions: Array,
    captions: Array
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.image {
  width: 100%;
  height: 70%;
  //background: url('../assets/images/five-4359234_1920.jpg');
  // background-size: cover;
  // background-position: center;
  // opacity: 0.5;

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
