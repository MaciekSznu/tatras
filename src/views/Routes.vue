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
  name: 'Mountains',
  components: {
    InfosBox,
    ImagesBox
  },
  data() {
    return {
      title: 'Szlaki',
      text:
        'W tatrach udostępniono dla ruchu turystycznego blisko 900 km szlaków, 275 km po stronie polskiej i 600 km po stronie słowackiej',
      href: 'https://tpn.pl/zwiedzaj/turystyka/turystyka-piesza',
      linkText:
        'Więcej informacji na temat tatrzańskich szlaków w Polsce znajdziesz ',
      link: 'tutaj',
      images: [
        require('@/assets/images/routes_01_1920.jpg'),
        require('@/assets/images/routes_02_1920.jpg'),
        require('@/assets/images/routes_04_1920.jpg'),
        require('@/assets/images/routes_06_1920.jpg'),
        require('@/assets/images/routes_05_1920.jpg'),
        require('@/assets/images/routes_03_1920.jpg')
      ],
      captions: [
        'Szlaki turytyczne - tylko po nich możesz się poruszać, no chyba, że taternicko ale to już zupełnie inna para kaloszy',
        'Takie oznaczenia znajdziesz po polskiej stronie Tatr',
        'A takie po stronie słowackiej',
        'Czasem wyglądają jak chodnik w parku',
        'A czasem trochę inaczej',
        'Zimą nie zawsze znajdziesz oznaczenia szlaków, powyżej górnej granicy lasu przykryje je śnieg'
      ],
      transitions: ['warp'],
      options: {
        autohideTime: 0,
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
