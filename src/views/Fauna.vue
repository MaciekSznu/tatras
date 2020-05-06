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
      title: 'Zwierzęta',
      text:
        'One są tutaj gospodarzami, to ich naturalne środowisko, to ich dom. Uszanujmy to i zachowujmy się tak jak goście. ',
      href: 'https://tpn.pl/poznaj/zwierzeta',
      linkText: 'Więcej informacji na temat tatrzańskich zwierząt znajdziesz ',
      link: 'tutaj',
      images: [
        require('@/assets/images/animals_view_08_1920.jpg'),
        require('@/assets/images/animals_view_02_1920.jpg'),
        require('@/assets/images/animals_view_04_1920.jpg'),
        require('@/assets/images/animals_view_03_1920.jpg'),
        require('@/assets/images/animals_view_01_1920.jpg'),
        require('@/assets/images/animals_view_06_1920.jpg')
      ],
      captions: [
        'Kozica - żywy symbol Tatr, godło TPN oraz TANAP',
        'Wilk - specjalista od jeleni (a raczej polowania na nie), tatrzańska populacja to ledwie kilkanaście osobników',
        'Kaczka krzyżówka - spotkasz ją nad każdym tatrzańskim jeziorem, ta pływała sobie po Rochackim Stawie',
        'Niedźwiedź – największy z drapieżników lądowych. Potrafi pędzić nawet 50 km/h, a także włamać się do samochodu w poszukiwaniu pożywienia',
        'Żmija Zygzakowata - spotkaliśmy się z tym dzieciakiem w drodze nad Wielicki Staw',
        'Świstak – przesypia ponad pół roku budząc się nawet o 2/3 lżejszym niż zasypiał'
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
