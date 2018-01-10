<template>
  <div>
    <carousel-3d :autoplay="true" class="slide-height" :display="films.length" :disable3d="true" :space="220" :clickable="false" :controls-visible="true">
      <slide class="slide-width slide-height" v-for="(film, $index) in films" :key="$index" :index="$index">
        <img class="slide-img" :src="film"/>
      </slide>
    </carousel-3d>
    <carousel-3d :dir="'ltr'" :autoplay="true" class="slide-height" :display="series.length" :disable3d="true" :space="220" :clickable="false" :controls-visible="true">
      <slide class="slide-width slide-height" v-for="(serie, $index) in series" :key="$index" :index="$index">
        <img class="slide-img" :src="serie"/>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>

import {Carousel3d, Slide} from 'vue-carousel-3d'

export default {
  data () {
    return {
      films: [
        '../../statics/cinema/f1.jpg',
        '../../statics/cinema/f2.jpg',
        '../../statics/cinema/f3.jpg',
        '../../statics/cinema/f4.jpg',
        '../../statics/cinema/f5.jpg',
        '../../statics/cinema/f6.jpg',
        '../../statics/cinema/f7.jpg',
        '../../statics/cinema/f8.jpg',
        '../../statics/cinema/f9.jpg',
        '../../statics/cinema/f10.jpg',
        '../../statics/cinema/f11.jpg',
        '../../statics/cinema/f12.jpg',
        '../../statics/cinema/f13.jpg',
        '../../statics/cinema/f14.jpg',
        '../../statics/cinema/f15.jpg',
        '../../statics/cinema/f16.jpg',
        '../../statics/cinema/f17.jpg',
        '../../statics/cinema/f18.jpg',
        '../../statics/cinema/f19.jpg',
        '../../statics/cinema/f20.jpg',
        '../../statics/cinema/f21.jpg',
        '../../statics/cinema/f22.jpg'
      ],
      series: [
        '../../statics/cinema/s1.jpg',
        '../../statics/cinema/s2.jpg',
        '../../statics/cinema/s3.jpg',
        '../../statics/cinema/s4.jpg',
        '../../statics/cinema/s5.jpg',
        '../../statics/cinema/s7.jpg',
        '../../statics/cinema/s8.jpg',
        '../../statics/cinema/s9.jpg',
        '../../statics/cinema/s10.jpg',
        '../../statics/cinema/s11.jpg',
        '../../statics/cinema/s12.jpg',
        '../../statics/cinema/s13.jpg',
        '../../statics/cinema/s14.jpg',
        '../../statics/cinema/s15.jpg',
        '../../statics/cinema/s16.jpg',
        '../../statics/cinema/s17.jpg',
        '../../statics/cinema/s18.jpg',
        '../../statics/cinema/s19.jpg',
        '../../statics/cinema/s20.jpg',
        '../../statics/cinema/s21.jpg',
        '../../statics/cinema/s22.jpg'
      ]
    }
  },
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style>
  .slide-width {
    width: 60% !important;
  }
  .slide-height {
    height: 100% !important;
  }
  .slide-img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
</style>
