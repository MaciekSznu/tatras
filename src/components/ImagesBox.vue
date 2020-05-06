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
        <p class="flux-caption">
          {{ captions.text }}
        </p>
      </flux-caption>
    </template>

    <template v-slot:controls>
      <flux-controls class="flux-controls" />
    </template>
  </vue-flux>
</template>

<script>
import { VueFlux, FluxCaption, FluxControls, FluxPreloader } from 'vue-flux'

export default {
  name: 'ImagesBox',
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
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
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 100%;
    height: 100%;
  }

  .flux-caption {
    top: 0;
    // right: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
    opacity: 0.7;
    // border-radius: 50%;
    text-align: center;
    margin: 0;
    padding: 10px 32px;
    color: black;
    font-size: 1rem;

    @media (orientation: landscape) {
      opacity: 1;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      padding-right: 64px;
      padding-left: 16px;
    }

    @media (min-width: 768px) {
      top: 20vh;
      padding-top: 24px;
      padding-bottom: 24px;

      @media (orientation: landscape) {
        top: 0;
        left: 0;
        width: 70vw;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      top: initial;
      left: initial;
      bottom: 0;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0.1) 100%
      );
    }

    // @media (min-width: 1280px) and (orientation: landscape) {
    //   //   max-width: 20vw;
    //   //   height: 80vw;
    //   //   top: 20vw;
    //   //   padding-right: 16px;
    //   //   padding-left: 16px;
    // }
  }

  .flux-controls {
    @media (min-width: 600px) and (orientation: landscape) {
      padding-left: 0;
      padding-right: 80px;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      padding: 0 100px;
    }
  }
  .flux-controls .flux-button > svg > circle,
  .flux-controls .flux-button > svg > polygon {
    fill: rgba(0, 0, 0, 0.2);
  }

  .flux-controls .flux-button:hover > svg line,
  .flux-controls .flux-button:hover > svg polyline {
    stroke: #000;
  }

  .flux-controls .flux-button:hover > svg polygon,
  .flux-controls .flux-button:hover > svg rect {
    fill: #000;
  }
}
</style>
