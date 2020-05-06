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
      title: 'Roślinność',
      text:
        'To one witaja nas w górach, piękne kwiaty, strzeliste drzewa, poskręcana kosodrzewina, gęste zarośla.',
      href: 'https://tpn.pl/poznaj/wody/rosliny',
      linkText: 'Więcej informacji na temat tatrzańskich roślin znajdziesz ',
      link: 'tutaj',
      images: [
        require('@/assets/images/flowers_view_01_1920.jpg'),
        require('@/assets/images/flowers_view_03_1920.jpg'),
        require('@/assets/images/flowers_view_02_1920.jpg'),
        require('@/assets/images/flowers_view_05_1920.jpg'),
        require('@/assets/images/flowers_view_04_1920.jpg'),
        require('@/assets/images/flowers_view_06_1920.jpg')
      ],
      captions: [
        'Krokus - zakwita zazwyczaj w kwietniu, tatrzańskie doliny oblegane sa wtedy przez rzesze turystów',
        'Kosodrzewina - jak mówi góralska legenda drzewo mo duse, i kosodrzewina zgodzieła sie, coby wyzdajali z niej krzyz na Męke Pańskom, tak sie jakosi zrobielo, co skarlała i cołga sie na kolanach, pokręcona z załości, hej...',
        'Oset - pięknie kwitnie ale może pokłuć',
        'Dywan krokusów',
        'Muchomorek - niby nie roślina ale pięknie wyglądał w okolicy Rochackiego Wodospadu',
        'Wierzbówka kiprzyca – kwiaty charakterystyczne dla tatrzańskich dolin i hal'
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
