<template>
  <div id="hobbies" class="bg-white">
    <q-card-title class="bg-light">
      Centres d'intérêt
      <q-icon slot="right" name="palette" />
    </q-card-title>
    <q-card-separator></q-card-separator>
    <q-parallax :src="'../statics/background.svg'">
      <div class="row inline justify-center">

        <div class="text-center customMargin">
          <q-modal content-css="background-color: black" ref="modal_voyages" enter-class="fadeInRight" leave-class="fadeOutRight" maximized>
            <q-toolbar color="secondary">
              <q-btn flat icon="backspace" @click="$refs.modal_voyages.close()">Retour</q-btn>
              <q-toolbar-title class="absolute-center">Voyages</q-toolbar-title>
            </q-toolbar>
            <voyages></voyages>
          </q-modal>

          <q-btn @click="$refs.modal_voyages.open()" round color="secondary" class="giant shadow-24">
            <q-icon name="public" size="130px" />
          </q-btn>
          <q-chip pointing="up" color="secondary" style="z-index: 40"><h6>VOYAGES</h6></q-chip>
        </div>

        <div class="text-center customMargin">
          <q-modal @open="music_ready = true" content-css="background-color: black" ref="modal_music" enter-class="fadeInRight" leave-class="fadeOutRight" maximized>
            <q-toolbar color="purple">
              <q-btn flat icon="backspace" @click="$refs.modal_music.close()">Retour</q-btn>
              <q-toolbar-title class="absolute-center">Musique</q-toolbar-title>
            </q-toolbar>
            <musique v-if="music_ready"></musique>
          </q-modal>

          <q-btn @click="$refs.modal_music.open()" round color="purple" class="giant shadow-24">
            <q-icon name="music_note" size="120px" />
          </q-btn>
          <q-chip pointing="up" color="purple" style="z-index: 40"><h6>MUSIQUE</h6></q-chip>
        </div>

        <div class="text-center customMargin">
          <q-modal @open="cinema_ready = true" @close="cinema_ready = false" content-css="background-color: black" ref="modal_cinema" enter-class="fadeInRight" leave-class="fadeOutRight" maximized>
            <q-toolbar color="amber">
              <q-btn flat icon="backspace" @click="$refs.modal_cinema.close()">Retour</q-btn>
              <q-toolbar-title class="absolute-center">Cinema</q-toolbar-title>
            </q-toolbar>
            <cinema v-if="cinema_ready"></cinema>
          </q-modal>

          <q-btn @click="$refs.modal_cinema.open()" round color="amber" class="giant shadow-24">
            <q-icon name="movie" size="110px" />
          </q-btn>
          <q-chip pointing="up" color="amber" style="z-index: 40"><h6>CINEMA</h6></q-chip>
        </div>

        <div class="text-center customMargin">
          <q-modal @open="jeux_ready = true" @close="jeux_ready = false" content-css="background-color: black" ref="modal_videogames" enter-class="fadeInRight" leave-class="fadeOutRight" maximized>
            <q-toolbar color="primary">
              <q-btn flat icon="backspace" @click="$refs.modal_videogames.close()">Retour</q-btn>
              <q-toolbar-title class="absolute-center">Jeux-vidéo</q-toolbar-title>
            </q-toolbar>
            <jeux-video v-if="jeux_ready"></jeux-video>
          </q-modal>

          <q-btn @click="$refs.modal_videogames.open()" round color="primary" class="giant shadow-24">
            <q-icon name="videogame_asset" size="120px" />
          </q-btn>
          <q-chip pointing="up" color="primary" style="z-index: 40"><h6>JEUX-VIDEO</h6></q-chip>
        </div>

        <div class="text-center customMargin">
          <q-modal content-css="background-color: black" ref="modal_others" enter-class="fadeInRight" leave-class="fadeOutRight" maximized>
            <q-toolbar color="deep-orange">
              <q-btn flat icon="backspace" @click="$refs.modal_others.close()">Retour</q-btn>
              <q-toolbar-title class="absolute-center">Autres...</q-toolbar-title>
            </q-toolbar>
            <autres></autres>
          </q-modal>
          <q-btn @click="$refs.modal_others.open()" round color="deep-orange" class="giant shadow-24">
            <q-icon name="add_circle" size="130px" />
          </q-btn>
          <q-chip pointing="up" color="deep-orange" style="z-index: 40"><h6>AUTRES...</h6></q-chip>
        </div>

      </div>
    </q-parallax>
  </div>
</template>

<script>
import Voyages from './hobbies/Voyages.vue'
import Musique from './hobbies/Musique.vue'
import Cinema from './hobbies/Cinema.vue'
import JeuxVideo from './hobbies/JeuxVideo.vue'
import Autres from './hobbies/Autres.vue'
import {
  QBtn,
  QToolbar,
  QToolbarTitle,
  QChip,
  QIcon,
  QCardTitle,
  QCardSeparator,
  QParallax,
  QModal
} from 'quasar'
export default {
  data () {
    return {
      cinema_ready: false,
      music_ready: false,
      jeux_ready: false
    }
  },
  components: {
    Voyages,
    Musique,
    Cinema,
    JeuxVideo,
    Autres,
    QBtn,
    QToolbar,
    QToolbarTitle,
    QChip,
    QIcon,
    QCardTitle,
    QCardSeparator,
    QParallax,
    QModal
  }
}
</script>

<style>
  .giant {
    height: 150px !important;
    width: 150px !important;
  }
  .customMargin {
    width: 150px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
</style>
