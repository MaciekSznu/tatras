<template>
  <vue-flux
    class="image"
    :options="options"
    :images="images"
    :transitions="transitions"
    :captions="captions"
    ref="slider"
  >
    <template v-slot:preloader>
      <flux-preloader />
    </template>

    <template v-slot:caption>
      <flux-caption v-slot="captions">
        <p class="flux-caption">{{ captions.text }}</p>
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

  .flux-caption {
    top: 0;
    // right: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 100%);
    opacity: 0.7;
    // border-radius: 50%;
    text-align: center;
    margin: 0;
    padding: 10px 32px;
    color: black;
    font-size: 1rem;

    @media (orientation: landscape) {
      opacity: 1;
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      padding-right: 64px;
      padding-left: 16px;
    }

    @media (min-width: 768px) {
      top: 20vh;
      padding-top: 24px;
      padding-bottom: 24px;

      @media (orientation: landscape) {
        top: 0;
        left: 30vw;
        width: 70vw;
        background: linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%);
      }
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      max-width: 30vw;
      height: 50%;
      left: 0;
      top: 50%;
      background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
    }

    @media (min-width: 1280px) and (orientation: landscape) {
      max-width: 20vw;
      padding-right: 16px;
      padding-left: 16px;
    }
  }
}
</style>
