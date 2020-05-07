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
      title: 'Tatry',
      text:
        'Jedni mówią "W górach jest wszystko co kocham", inni pukają się w czoło na myśl o wyjściu w góry. Dla mnie góry a zwłaszcza Tatry to miejsce gdzie odpoczywam, gdzie moge pobyc sam ze sobą i zapomnieć o codziennych problemach.',
      href: '',
      linkText: '',
      link: '',
      images: [
        require('@/assets/images/mountains_view_01_1920.jpg'),
        require('@/assets/images/mountains_view_02_1920.jpg'),
        require('@/assets/images/mountains_view_03_1920.jpg'),
        require('@/assets/images/mountains_view_04_1920.jpg')
      ],
      captions: [
        'Zachód słońca nad Tatrami',
        'W drodze na Giewont',
        'Polski Matterhorn',
        'Czy te chmury coś przyniosą?'
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
