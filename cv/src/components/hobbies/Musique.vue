<template>
  <div>
    <div class="row justify-center">
      <q-card class="col-md-4 col-sm-10 text-dark" style="background-size: cover; background-position: center center; background-image: url('../../statics/music/gratte2.jpg')">
        <q-card-title class="c-bg-trans">
          Compositions en MAO
          <span slot="subtitle">Musique Assistée par Ordinateur</span>
        </q-card-title>
        <q-card-separator></q-card-separator>
        <q-card-main class="c-bg-trans">
          Je partage avec vous, sans prétention, quelques extraits du travail que j'ai fais en MAO. Je passe entre 15 et 20 heures par morceau, en commençant généralement par trouver les premières notes sur mes instruments pour ensuite les retranscrire dans le logiciel.
        </q-card-main>
      </q-card>
      <a-player class="col-md-6 col-sm-10" style="background-color: white" :music="playlist"></a-player>
    </div>
    <div class="row justify-center">
      <q-card class="col-md-5 text-dark bg-white">
        <q-card-title>
          Musique accoustique
          <span slot="subtitle">Pratique de divers instruments</span>
        </q-card-title>
        <q-card-separator></q-card-separator>
        <q-card-main>
          Je pratique principalement des percussions (Cajon, Djembe, Udu, Handpan, ...) et de la guitare, mais je m'interesse et m'essaye à tout ce qui attire ma curiosité : flutes, guimbardes, banjo, piano, kalimba, xylophone, autres instruments à cordes, etc.. J'utilise souvent une pédale de loop pour pouvoir mélanger tout ça.
        </q-card-main>
        <q-card-main>
          Je joue l'été en extérieur sur les quais de Seine, et toute l'année dans des bars pour accompagner un ami.
        </q-card-main>
      </q-card>
      <q-card class="col-md-5 text-dark" style="background-size: cover; background-position: left center; background-image: url('../../statics/music/gratte.jpg')">
        <q-card-title class="c-bg-trans">
          Ecoute
          <span slot="subtitle">Culture musicale</span>
        </q-card-title>
        <q-card-separator></q-card-separator>
        <q-card-main class="c-bg-trans">
          Je passe certains moments à rechercher de nouveaux artistes que je pourrais aimer. Le principal de mes connaissances sont dans le genre électronica, mais je connais un peu de rock, jazz, trip-hop, breakcore, rap, etc.
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'

import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator
} from 'quasar'

export default {
  data () {
    return {
      playlist: [
        {
          title: 'Extrait n°1',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample1.mp3',
          pic: '../../statics/album.jpg'
        },
        {
          title: 'Extrait n°2',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample2.mp3',
          pic: '../../statics/album.jpg'
        },
        {
          title: 'Extrait n°3',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample3.mp3',
          pic: '../../statics/album.jpg'
        },
        {
          title: 'Extrait n°4',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample4.mp3',
          pic: '../../statics/album.jpg'
        },
        {
          title: 'Extrait n°5',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample5.mp3',
          pic: '../../statics/album.jpg'
        },
        {
          title: 'Extrait n°6',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample6.mp3',
          pic: '../../statics/album.jpg'
        },
        {
          title: 'Extrait n°7',
          author: 'Thomas Bayet',
          url: '../../statics/music/sample7.mp3',
          pic: '../../statics/album.jpg'
        }
      ]
    }
  },
  components: {
    'a-player': VueAplayer,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator
  }
}
</script>

<style>
  .c-bg-trans {
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
