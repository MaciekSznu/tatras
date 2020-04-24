<template>
  <InfosBox
    :title="title"
    :text="text"
    :href="href"
    :linkText="linkText"
    :link="link"
  />
</template>

<script>
import InfosBox from '@/components/InfosBox.vue'

export default {
  name: 'Routes',
  components: {
    InfosBox
  },
  data() {
    return {
      title: 'Routes',
      text:
        'Stronę tą zrobiłem z miłości do Tatr i tęskony za nimi w czasach epidemii. Przy okazji szlifując pracę z VUE.js',
      href: 'https://tpn.pl/',
      linkText: 'Duuużo więcej informacji na temat Tatr znajdziesz na stronie ',
      link: 'TPN'
    }
  }
}
</script>

<style lang="scss" scoped></style>
