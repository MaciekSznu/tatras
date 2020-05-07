<template>
  <div class="info-box">
    <h1 class="info-box__title">{{ title }}</h1>
    <p class="info-box__text">{{ text }}</p>
    <p class="info-box__link">
      {{ linkText }}
      <a :href="href" target="_blank" rel="noopener noreferrer"> {{ link }}</a>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    font-family: $headers-font;
    color: $info-box-title-color;
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  &__text,
  &__link {
    font-family: $paragraph-font;
    color: $info-box-text-color;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0;
    letter-spacing: 1px;
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
    }
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    top: 0;
    left: 0;
    width: 30vw;
    height: 40vh;
    padding: 32px;
    box-shadow: 5px 5px 5px 0px rgba(204, 204, 204, 0.8);

    @media (min-height: 900px) {
      height: 30vh;
      justify-content: space-evenly;
    }
  }

  @media (min-width: 1280px) and (orientation: landscape) {
    // max-width: 20vw;
    // height: 20vw;
  }
}
</style>
