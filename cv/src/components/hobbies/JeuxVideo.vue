<template>
  <div class="row justify-center">
    <div class="col-6 c-description">
      Je m'interesse beaucoup aux jeux indépendants, souhaitant moi-même un jour en imaginer un et mener son développement.
      C'est le genre dans lequel on retrouve un univers graphique, musical, et une méthode de jeu qui provoquent l'émotion
      et rendent l'oeuvre largement comparable aux autres arts bien connus de l'audiovisuel. Je favorise les jeux
      de puzzle, stratégie, réflexes. Je joue aussi à des jeux d'équipe en ligne, de plus grandes licences, avec des amis.
    </div>
    <div class="col-12 text-center">
      <carousel-3d :autoplay="true" class="c-carousel">
        <slide v-for="(jeu, $index) in jeux" :key="$index" :index="$index" class="c-slide">
          <img :src="jeu" class="c-slide">
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'

export default {
  data () {
    return {
      jeux: [
        '../../statics/jeux/j1.jpg',
        '../../statics/jeux/j2.png',
        '../../statics/jeux/j3.png',
        '../../statics/jeux/j4.jpg',
        '../../statics/jeux/j5.jpg',
        '../../statics/jeux/j6.jpg',
        '../../statics/jeux/j7.jpg',
        '../../statics/jeux/j8.jpg',
        '../../statics/jeux/j9.jpg',
        '../../statics/jeux/j10.jpg',
        '../../statics/jeux/j11.jpg',
        '../../statics/jeux/j12.jpg',
        '../../statics/jeux/j13.jpg',
        '../../statics/jeux/j14.jpg',
        '../../statics/jeux/j15.png',
        '../../statics/jeux/j16.jpg',
        '../../statics/jeux/j17.jpg',
        '../../statics/jeux/j18.jpg',
        '../../statics/jeux/j19.jpg'
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
  .c-description {
    background-color: white;
    text-align: center;
    margin: 10px;
    padding: 10px;
  }
  .c-carousel {
    height: 350px !important;
    margin-left: -6vw !important;
  }
  .c-slide {
    height: 350px !important;
    width: 600px !important;
  }
</style>
