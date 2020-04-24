<template>
  <div class="page-wrapper">
    <InfosBox
      :title="title"
      :text="text"
      :href="href"
      :linkText="linkText"
      :link="link"
    />
    <ImagesBox />
  </div>
</template>

<script>
import InfosBox from '@/components/InfosBox.vue'
import ImagesBox from '@/components/ImagesBox.vue'

export default {
  name: 'Home',
  components: {
    InfosBox,
    ImagesBox
  },
  data() {
    return {
      title: 'Home',
      text:
        'Stronę tą zrobiłem z miłości do Tatr i tęskony za nimi w czasach epidemii. Przy okazji szlifując pracę z VUE.js',
      href: 'https://tpn.pl/',
      linkText: 'Duuużo więcej informacji na temat Tatr znajdziesz na stronie ',
      link: 'TPN'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
