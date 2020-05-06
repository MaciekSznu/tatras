<template>
  <div class="page-wrapper">
    <transition
      @before-enter="infoBeforeEnter"
      @enter="infoEnter"
      :css="false"
      appear
    >
      <InfosBox
        :title="title"
        :text="text"
        :href="href"
        :linkText="linkText"
        :link="link"
      />
    </transition>
    <transition
      @before-enter="imageBeforeEnter"
      @enter="imageEnter"
      :css="false"
      appear
    >
      <ImagesBox
        :options="options"
        :images="images"
        :transitions="transitions"
        :captions="captions"
      />
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
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
        'Strona powstała z tęskony za Tatrami w czasach epidemii, przy okazji zgłębiałem podstawy VUE.js',
      href: 'https://tpn.pl/',
      linkText: 'Duuużo więcej informacji na temat Tatr znajdziesz na stronie ',
      link: 'TPN',
      images: [
        require('@/assets/images/home_view_01_1920.jpg'),
        require('@/assets/images/home_view_02_1920.jpg'),
        require('@/assets/images/home_view_03_1920.jpg'),
        require('@/assets/images/home_view_04_1920.jpg'),
        require('@/assets/images/winter_mountain_02_1920.jpg'),
        require('@/assets/images/winter_mountain_04_1920.jpg')
      ],
      captions: [
        'Dolina Pięciu Stawów Polskich tzw. "Piątka", w tle Krzyżne oraz fragment Orlej Perci',
        'Wielicki Staw i Wielicki Wodospad',
        'Tatry Zachodnie - polecam na początek przygody',
        'Od prawej Świnica, Kościelec, na drugim planie fragment Orlej Perci i Granaty',
        'Tatry Zachodnie w zimowej szacie',
        'Od prawej Przełęcz Liliowe, Skrajna Turnia, Pośrednia Turnia, Świnicka Przełęcz, Świnica'
      ],
      transitions: ['warp'],
      options: {
        autohideTime: 1000,
        autoplay: true,
        allowFullscreen: true,
        enableGestures: true
      }
    }
  },
  methods: {
    infoBeforeEnter(el) {
      // eslint-disable-next-line prettier/prettier
      el.style.opacity = 0,
      el.style.transform = 'translateX(-100%)'
    },
    infoEnter(el, done) {
      gsap.to(el, {
        duration: 2,
        opacity: 0.8,
        transform: 'translateX(0)',
        ease: 'circ.out',
        onComplete: done
      })
    },
    imageBeforeEnter(el) {
      // eslint-disable-next-line prettier/prettier
      el.style.transform = 'translateX(100%)'
    },
    imageEnter(el, done) {
      gsap.to(el, {
        duration: 2,
        transform: 'translateX(0)',
        ease: 'circ.out',
        onComplete: done
      })
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
