<template>
  <div class="info-box">
    <h1 class="info-box__title">{{ title }}</h1>
    <p class="info-box__text">{{ text }}</p>
    <p class="info-box__link">
      {{ linkText }}
      <a :href="href" target="_blank" rel="noopener noreferrer"> {{ link }} </a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'InfosBox',
  props: {
    title: String,
    text: String,
    linkText: String,
    href: String,
    link: String
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.info-box {
  width: 100%;
  height: 30%;
  background-color: $info-box-bg-color;
  border: none;
  padding: 0 1rem;
  z-index: 100;
  &__title {
    font-family: $headers-font;
    color: $info-box-title-color;
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0 0.5rem 0;
  }

  &__text,
  &__link {
    font-family: $paragraph-font;
    color: $info-box-text-color;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0;
  }

  &__link a {
    text-decoration: none;
    color: $info-box-text-color;
    font-weight: 700;
  }

  @media (orientation: landscape) {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    opacity: 0.8;

    @media (orientation: landscape) {
      width: 30vw;
      height: 100%;
      max-width: 30vw;
      // max-height: 300px;
    }
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    max-width: 30vw;
    height: 50%;
  }

  @media (min-width: 1280px) and (orientation: landscape) {
    max-width: 20vw;
    height: 50%;
  }
}
</style>
