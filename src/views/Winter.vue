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
      title: 'Zima',
      text:
        'Zimą góry są jeszcze piękniejsze. Jeszcze bardziej niebezpieczne i nieprzewidywalne. Jeszcze więcej przestrzeni i wolności dookoła',
      href:
        'https://tpn.pl/zwiedzaj/bezpieczenstwo/zima-w-tatrach-moj-pierwszt-raz',
      linkText: 'Chcesz wybrac się w Tatry zimą?',
      link: 'Zajrzyj tutaj',
      images: [
        require('@/assets/images/winter_mountain_07_1920.jpg'),
        require('@/assets/images/winter_mountain_06_1920.jpg'),
        require('@/assets/images/winter_mountain_01_1920.jpg'),
        require('@/assets/images/winter_lake_01_1920.jpg')
      ],
      captions: ['Orla Perć', 'Mnich', 'Świnica', 'Smreczyński staw'],
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
