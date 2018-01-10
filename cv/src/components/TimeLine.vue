<template>
  <q-card id="timeline" class="bg-white">
    <q-card-title class="bg-light">
      Timeline
      <q-icon slot="right" name="timeline" />
    </q-card-title>
    <q-card-separator />
    <q-card-main class="row justify-center">
      <q-slider class="col-8" color="blue-grey-8" v-model="i" :min="0" :max="timeline.length - 1" :step="1" markers
                label-always :label-value="timeline[i].date" square />
    </q-card-main>
    <q-card-media>
      <q-carousel dots arrows infinite autoplay class="text-white">
        <div @dblclick="$refs.modal.open()" slot="slide" class="text-center bg-dark height200" v-for="imageLink in timeline[i].gallery">
          <img style="transform: translate(0, -50%)" width="100%" :src="imageLink" />
        </div>
        <q-icon slot="action" @click="$refs.modal.open()" name="fullscreen" />
      </q-carousel>

      <q-modal ref="modal" class="maximized">
        <q-carousel arrows dots infinite autoplay class="text-white full-height">
          <div slot="slide" class="bg-tertiary centered" v-for="imageLink in timeline[i].gallery">
            <img :src="imageLink" style="height:100%; width:auto" />
          </div>
          <q-btn style="position: fixed; top:0; right:0; z-index: 1" @click="$refs.modal.close()"
                 color="dark" icon-right="close">
            Quitter
          </q-btn>
        </q-carousel>
      </q-modal>
      <!--
      <q-gallery-carousel infinite autoplay dots fullscreen handle-arrow-keys
                          :src="gallery" />
      -->
    </q-card-media>

    <q-collapsible :label="timeline[i].label" :sublabel="timeline[i].sublabel">
      <q-card-main v-for="(desc, $index) in timeline[i].description" :key="$index">
        {{ desc }}
      </q-card-main>
    </q-collapsible>
  </q-card>

</template>

<script>

import {
  QSlider,
  QCard,
  QCardMedia,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QGalleryCarousel,
  QCarousel,
  QIcon,
  QModal,
  QBtn,
  QCollapsible
} from 'quasar'

export default {
  data () {
    return {
      i: 0,
      timeline: [
        {
          date: '2009',
          label: 'IUT Informatique',
          sublabel: '2009-2011',
          description: [
            'Obtention du Diplôme Universitaire Technologique (DUT) en informatique à l\'IUT de Dijon.',
            'La moitié des cours portent sur l\'informatique et l\'autre sur divers modules plus généraux (anglais, management, économie-droit, expression, etc...). ' +
            'On y aborde l\'algorithmique, la POO, les bases de données et différents diagrammes, l\'électronique et l\'embarqué',
            'Réalisation de deux projets annuels: un Kalaha (jeu de plateau africain) Player.vs.IA en java (binôme), et un moteur 2D de jeux en C# (groupe).',
            'Stage de 11 semaines au service informatique du Conseil Régionnal de Bourgogne pour la maintenance sur un module PHP de l\'intranet existant pour la gestion de projets; analyse et développement d\'un cahier des charges pour remplacer le module.',
            'J\'ai aussi pris part à la vie associative de l\'iut en rejoignant l\'ETIQ (ETudiant InformatiQue): ' +
            'organisation du local et des activités proposées, d\'évènements (intégrations, soirées étudiantes, stands, fêtes de fin d\'année), et du festival annuel .dijon//SAITEN.'
          ],
          gallery: [
            '../statics/timeline/iut.jpg',
            '../statics/timeline/iut1.jpg',
            '../statics/timeline/iut2.jpg',
            '../statics/timeline/iut3.jpg',
            '../statics/timeline/iut4.jpg',
            '../statics/timeline/iut5.png',
            '../statics/timeline/iut6.png'
          ]
        },
        {
          date: '2011',
          label: 'Licence Mathématiques-Informatique',
          sublabel: '2011-2012',
          description: [
            'Cursus de la Licence mathématiques-informatique à l\'Université de Bourgogne.',
            'L\'éventail et la qualité des cours a été personnellement décevante: trop peu d\'informatique et à un niveau trop bas, trop de théorie. ' +
            'Je ne me suis donc investi qu\'un semestre, mais ai pu cependant réaliser quelques projets interessants au cours de l\'année: ' +
            'programmation d\'un robot aspirateur (algorithme de contour et de balayage) avec interface graphique en java, et ' +
            'modélisation 3D d\'un jeu d\'échecs en POV-Ray.'
          ],
          gallery: [
            '../statics/timeline/ub1.png',
            '../statics/timeline/ub2.png',
            '../statics/timeline/ub3.bmp',
            '../statics/timeline/ub4.png'
          ]
        },
        {
          date: '2012',
          label: 'Webcitrus',
          sublabel: '2012-2013',
          description: [
            'Un ami avec qui j\'ai travaillé sur le projet du moteur de jeux 2D (section IUT) m\'a proposé de l\'utiliser pour développer un jeu de rythme.',
            'Lancement d\'une campagne de financement participatif sur Ulule.fr afin de nous aider à monter une entreprise sur Dijon. La société Webcitrus démarre ainsi son activité en février 2013: ' +
            'dépannage et cours d\'informatique à domicile (déplacements en vélo), ' +
            'création du jeu vidéo 8bit the musical (renommé ensuite Old School Musical ), ' +
            'vente/conseils de matériel et montage d\'ordinateurs, ' +
            'développement web et logiciel.',
            'J\'assure la majorité des dépannages, développant ainsi mon relationnel et travaillant sur le jeu au bureau entre deux clients.',
            'L\'entreprise ne rapporte pas suffisemment, faute de communication, et ferme à la fin de l\'année.'
          ],
          gallery: [
            '../statics/timeline/wc1.jpg',
            '../statics/timeline/wc2.jpg',
            '../statics/timeline/wc3.png',
            '../statics/timeline/wc4.jpg'
          ]
        },
        {
          date: '2014',
          label: 'Graphisme et musique',
          sublabel: '2014-2015',
          description: [
            'Graphisme de jeux-vidéos 2D (pixel-art), confection de mock\'up pour des projets personnels et realisation de commandes. ' +
            'Je finis par quitter l\'équipe du projet Old School Musical (perte de motivation).',
            'Travail régulier de la musique, pratique de la percussion, de la guitare, et autres. Découverte de la MAO (Musique Assistée par Ordinateur), des instruments virtuels (via MIDI) et composition.',
            'J\'ai acquis en autoditacte des notions graphiques : calques, sprites, tilesets, palettes, animations et ' +
            'des notions en MAO : sampler, VST (Virtual Studio Technology), fréquences et modulations; à travers des logiciels que j\'ai du apprendre à utiliser, comme ' +
            'Renoise, FL Studio, Audacity, GraphicsGale.'
          ],
          gallery: [
            '../statics/timeline/mu1.png',
            '../statics/timeline/mu2.png',
            '../statics/timeline/mu3.png',
            '../statics/timeline/mu4.png',
            '../statics/timeline/mu5.png'
          ]
        },
        {
          date: '2015',
          label: 'Ecole 42',
          sublabel: '2015-2018',
          description: [
            'Piscine C en juillet 2015 (épreuves sur 4 semaines d\'apprentissage) puis entrée à l\'Ecole 42 en novembre.',
            'Afin de vanter ce cursus en étant synthétique, je dirais c\'est de loin le système éducatif le plus adapté que je connaisse. Il nous apprend à être pédagogue, et surtout à bien comprendre tout ce qu\'on fait, à travailler en groupe, à être autonome, à persévérer... On se doit de développer avec une norme, en sécurisant nos programmes et en maîtrisant la mémoire solicitée.',
            'J\'y ai choisi de suivre les projets de la branche "Système" pour finalement être séduit par le web après la piscine PHP et mon stage.',
            'J\'ai la première année pris part au Club Music42 de l\'école afin de jouer ensembles et proposer des concerts lors de nos évènements. ' +
            'Puis la deuxième année, j\'ai rejoins le BDE pour participer à la vie étudiante et favoriser la rencontre.'
          ],
          gallery: [
            '../statics/timeline/42.jpg',
            '../statics/timeline/421.jpg',
            '../statics/timeline/422.png',
            '../statics/timeline/423.png',
            '../statics/timeline/424.png'
          ]
        },
        {
          date: '2017',
          label: 'Stage web à Safran',
          sublabel: '5 mois',
          description: [
            'Une étape obligatoire de mon cursus à 42 qui m\'a permis de prendre davantage conscience de ma valeur en entreprise et de mes capacités.',
            'J\'ai pris en main, seul, un projet d\'application web en AngularJS - NodeJS (technologies et logiciels que j\'ai du apprendre à utiliser). ' +
            'Je ne peux pas partager le code, à cause du secret professionnel, mais c\'est un circuit qui commence par un watcher sur des fichiers pour importer les données dans la base puis les interpréter à travers des affichages statistiques dynamiques.',
            'J\'ai aussi eu un autre stagiaire à encadrer et à faire travailler sur le projet pendant les deux derniers mois'
          ],
          gallery: [
            '../statics/quasar-logo.png',
            '../statics/quasar-logo.png',
            '../statics/quasar-logo.png',
            '../statics/quasar-logo.png',
            '../statics/quasar-logo.png',
            '../statics/quasar-logo.png'
          ]
        }
      ]
    }
  },
  components: {
    QSlider,
    QCard,
    QCardMedia,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QGalleryCarousel,
    QCarousel,
    QIcon,
    QModal,
    QBtn,
    QCollapsible
  }
}
</script>

<style>
  .height200 {
    height: 200px !important;
    max-height: 200px !important;
  }
</style>
