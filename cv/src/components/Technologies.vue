<template>
  <div id="technologies" class="bg-white">
    <q-card-title class="bg-light">
      Technologies
      <q-icon slot="right" name="code" />
    </q-card-title>
    <q-card-separator></q-card-separator>
  <q-parallax :src="'../statics/background.svg'">
    <q-card v-for="(tech, $index) in techs" :key="$index" color="dark" class="text-center shadow-8" style="width:120px">
      <q-card-media style="height:120px">
        <q-icon :name="tech.icon" size="100px" style="margin:10px;"/>
      </q-card-media>
      <q-card-media overlay-position="full" style="height:80px">
        <q-card-title slot="overlay">
          <q-rating readonly v-model="tech.note" :max="4" />
          <div slot="subtitle">{{ tech.name }}</div>
        </q-card-title>
      </q-card-media>
    </q-card>
  </q-parallax>
  </div>
</template>

<script>

import {
  QRating,
  QIcon,
  QCard,
  QCardMedia,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QParallax
} from 'quasar'

export default {
  data () {
    return {
      techs: [
        {
          note: 4,
          icon: 'icon-c',
          name: 'Langage C'
        },
        {
          note: 2,
          icon: 'icon-shell',
          name: 'Shell script'
        },
        {
          note: 2,
          icon: 'icon-php',
          name: 'PHP'
        },
        {
          note: 2,
          icon: 'icon-mysql',
          name: 'MySQL'
        },
        {
          note: 4,
          icon: 'icon-html',
          name: 'HTML 5'
        },
        {
          note: 4,
          icon: 'icon-css',
          name: 'CSS 3'
        },
        {
          note: 4,
          icon: 'icon-javascript',
          name: 'Javascript'
        },
        {
          note: 3,
          icon: 'icon-angular',
          name: 'Angular'
        },
        {
          note: 3,
          icon: 'icon-vue',
          name: 'Vue'
        },
        {
          note: 2,
          icon: 'icon-nodejs',
          name: 'NodeJS'
        },
        {
          note: 3,
          icon: 'icon-typescript',
          name: 'ReactJS'
        },
        {
          note: 1,
          icon: 'icon-java',
          name: 'Java'
        }
      ]
    }
  },
  components: {
    QRating,
    QIcon,
    QCard,
    QCardMedia,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QParallax
  }
}
</script>

<style>
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
  .q-parallax-text {
    text-shadow: none !important;
  }
</style>
