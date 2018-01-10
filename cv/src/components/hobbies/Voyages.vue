<template>
  <div class="row justify-center">
    <div class="col-md-6 col-sm-12">
      <div id="map-div"></div>
    </div>
    <div class="col-md-6 col-sm-12" v-for="(pics, $index) in list_pics" :key="$index">
      <div class="row justify-center">
        <div class="col-md-6 col-sm-6 text-center pic-container" v-for="(pic, $index) in pics" :key="$index">
          <img class="gallery-pic" :src="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'ammap3/ammap/ammap'
import 'ammap3/ammap/themes/black'
import 'ammap3/ammap/maps/js/worldLow'

import {
} from 'quasar'

export default {
  data () {
    return {
      list_pics: [
        [
          '../../statics/photos/p1.jpg',
          '../../statics/photos/p2.jpg',
          '../../statics/photos/p3.jpg',
          '../../statics/photos/p4.jpg'
        ], [
          '../../statics/photos/p5.jpg',
          '../../statics/photos/p6.jpg',
          '../../statics/photos/p7.jpg',
          '../../statics/photos/p8.jpg'
        ], [
          '../../statics/photos/p9.jpg',
          '../../statics/photos/p10.jpg',
          '../../statics/photos/p11.jpg',
          '../../statics/photos/p12.jpg'
        ]
      ]
    }
  },
  created () {
    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z'
    window.AmCharts.makeChart('map-div', {
      type: 'map',
      theme: 'black',
      areasSettings: {
        'autoZoom': false
      },
      zoomControl: {
        zoomControlEnabled: false
      },
      dataProvider: {
        map: 'worldLow',
        images: [ {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Paris',
          latitude: 48.856614,
          longitude: 2.352222
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Dijon',
          latitude: 47.322047,
          longitude: 5.041480
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Montpellier',
          latitude: 43.610769,
          longitude: 3.8767160
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Ardèche',
          latitude: 44.407452,
          longitude: 4.395401
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Alpes',
          latitude: 45.297948,
          longitude: 6.582098
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Besançon',
          latitude: 47.237829,
          longitude: 6.024054
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Bordeau',
          latitude: 44.837789,
          longitude: -0.579180
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Millau',
          latitude: 44.100575,
          longitude: 3.077801
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Iles Canaries',
          latitude: 29.046854,
          longitude: -13.589973
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Tokyo',
          latitude: 35.689487,
          longitude: 139.691706
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Kyoto',
          latitude: 35.011636,
          longitude: 135.768029
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Nara',
          latitude: 34.685087,
          longitude: 135.805000
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Sugi Otoyo',
          latitude: 33.755953,
          longitude: 133.664594
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Inawashiro',
          latitude: 37.557768,
          longitude: 140.104760
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Hambourg',
          latitude: 53.551085,
          longitude: 9.993682
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Amsterdam',
          latitude: 52.370216,
          longitude: 4.895168
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Bruxelles',
          latitude: 50.850340,
          longitude: 4.351710
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Liege',
          latitude: 50.632557,
          longitude: 5.579666
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Gotebourg',
          latitude: 57.708870,
          longitude: 11.974560
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Helsinki',
          latitude: 60.169856,
          longitude: 24.938379
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Turku',
          latitude: 60.451813,
          longitude: 22.266630
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Meteores',
          latitude: 39.721704,
          longitude: 21.630590
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Athènes',
          latitude: 37.983810,
          longitude: 23.727539
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'République Dominicaine',
          latitude: 18.735693,
          longitude: -70.162651
        }, {
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
          title: 'Copenhagen',
          latitude: 55.676097,
          longitude: 12.568337
        }]
      }
    })
  },
  components: {
  }
}
</script>

<style lang="sass">
  #map-div
    width: 100%
    height: 300px
  .gallery-pic
    border: solid 1px black
    height: 100%
    width: 100%
    object-fit: cover
  .pic-container
    height: 150px
  .gallery-pic:hover
    transform: scale(1.1)
</style>
