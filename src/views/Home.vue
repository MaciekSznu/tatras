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
        'Strona powstała z miłości do Tatr i tęskony za nimi w czasach epidemii. Przy okazji szlifowano podstawy VUE.js',
      href: 'https://tpn.pl/',
      linkText: 'Duuużo więcej informacji na temat Tatr znajdziesz na stronie ',
      link: 'TPN',
      images: [
        require('@/assets/images/home_view_01_1920.jpg'),
        require('@/assets/images/home_view_02_1920.jpg'),
        require('@/assets/images/home_view_03_1920.jpg'),
        require('@/assets/images/home_view_04_1920.jpg')
      ],
      transitions: ['warp'],
      captions: ['fade', 'book'],
      options: {
        autoplay: true,
        allowFullscreen: true,
        lazyLoad: false
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
      // el.style.opacity = 0,
      el.style.transform = 'translateX(100%)'
    },
    imageEnter(el, done) {
      gsap.to(el, {
        duration: 2,
        // opacity: 1,
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

// .box-fade-enter {
//   opacity: 0;
//   // scale: 0;
// }
// .box-fade-enter-to {
//   opacity: 0.8;
//   // scale: 1;
// }
// .box-fade-enter-active {
//   transition: opacity 1.5s ease-out 0.5s;
// }
// .box-fade-leave-to {
//   opacity: 0;
//   // scale: 0;
// }
// .box-fade-leave-active {
//   transition: opacity 1.5s ease-in 0.5s;
// }

// .image-fade-enter {
//   opacity: 0.5;
// }
// .image-fade-enter-active {
//   transition: opacity 0.5s ease-out;
// }
// .image-fade-leave-to {
//   opacity: 0;
// }
// .image-fade-leave-active {
//   transition: opacity 0.5s ease-in;
// }
</style>
