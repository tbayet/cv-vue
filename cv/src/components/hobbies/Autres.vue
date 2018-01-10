<template>
  <div class="row justify-center">
    <q-card class="col-md-3 col-sm-10 text-dark bg-white">
      <q-card-media>
        <img class="image-fill" src="../../statics/autres/legumes.jpg" />
      </q-card-media>
      <q-card-title>
        <q-icon slot="right" name="restaurant" />
        Cuisine
        <span slot="subtitle">Végétalienne</span>
      </q-card-title>
      <q-card-separator></q-card-separator>
      <q-card-main>
        Me sentant concerné par les conséquences de la surproduction dans le domaine alimentaire, j'ai adapté ma consommation
        et j'apprend chaque jour par la force des choses de nouvelles recettes. J'aime prendre le temps de préparer le repas,
        d'équilibrer, de me risquer à de nouvelles découvertes, et d'en partager le résultat.
      </q-card-main>
    </q-card>
    <q-card class="col-md-3 col-sm-10 text-dark bg-white">
      <q-card-media>
        <img class="image-fill" src="../../statics/autres/jeuplateau.jpg" />
      </q-card-media>
      <q-card-title>
        <q-icon slot="right" name="casino" />
        Jeux de société
        <span slot="subtitle">Et jeux de rôle</span>
      </q-card-title>
      <q-card-separator></q-card-separator>
      <q-card-main>
        Je propose ou rejoins ponctuellement des soirées de petit commité pour découvrir des nouveaux jeux de plateaux,
        de cartes, de dés, etc... Le marché est riche en diversité et je suis toujours surpris de l'intelligence et de la
        patience qu'il faut mettre en oeuvre pour inventer de pareils systèmes, mécanismes.
      </q-card-main>
    </q-card>
    <q-card class="col-md-3 col-sm-10 text-dark bg-white">
      <q-card-media>
        <img class="image-fill" src="../../statics/autres/ecriture.jpg" />
      </q-card-media>
      <q-card-title>
        <q-icon slot="right" name="edit" />
        Ecriture
        <span slot="subtitle">Blog poésie/philo-socio</span>
      </q-card-title>
      <q-card-separator></q-card-separator>
      <q-card-main>
        Je passe par période du temps à explorer des livres ou des blogs qui pourraient m'aider à comprendre le fonctionnement
        du cerveau humain. L'intelligence artificielle me semble aller de plus en plus dans ce sens, et allier la psychologie
        à l'algorithmique ouvre selon moi un secteur d'avenir dans la technologie. Je tiens un blog afin de confirmer ce
        que j'ai compris et structurer ma pensée. Je me tente aussi à quelques poèmes allant de pair avec ma passion pour la musique.
      </q-card-main>
    </q-card>

  </div>
</template>

<script>

import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QCardMedia,
  QIcon
} from 'quasar'

export default {
  data () {
    return {}
  },
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardMedia,
    QIcon
  }
}
</script>

<style>
  .image-fill {
    min-height: 200px;
    height: 30vh;
    object-fit: cover;
  }
</style>
