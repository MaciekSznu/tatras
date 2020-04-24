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
  padding: 0 2rem;
  &__title {
    font-family: $headers-font;
    color: $info-box-title-color;
    font-size: 2rem;
    font-weight: 700;
  }

  &__text,
  &__link {
    font-family: $paragraph-font;
    color: $info-box-text-color;
    font-size: 1rem;
    font-weight: 400;
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
    width: 30vh;
    height: 30vh;
    opacity: 0.7;

    @media (orientation: landscape) {
      width: 30vw;
      height: 30vw;
      max-width: 600px;
      max-height: 400px;
      //border-radius: 0 0 50px 0;
    }
  }
}
</style>
