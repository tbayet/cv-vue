<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout :left-breakpoint="0" ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
      <q-toolbar slot="header" class="glossy" color="blue-grey-8">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-btn flat @click="$router.push('/')">
          <img src="./statics/avatar.jpg" class="avatar" round />
          <q-toolbar-title>
            {{me.firstName}} {{me.lastName}}
            <div slot="subtitle">{{me.age()}} ans</div>
          </q-toolbar-title>
        </q-btn>
        <a href="#timeline"><q-btn flat class="inheritBtn">
          <q-icon name="timeline" />
          <q-toolbar-title>
            Timeline
          </q-toolbar-title>
        </q-btn></a>
        <a href="#technologies"><q-btn flat class="inheritBtn">
          <q-icon name="code" />
          <q-toolbar-title>
            Technologies
          </q-toolbar-title>
        </q-btn></a>
        <a href="#profil"><q-btn flat class="inheritBtn">
          <q-icon name="person" />
          <q-toolbar-title>
            Profil
          </q-toolbar-title>
        </q-btn></a>
        <a href="#hobbies"><q-btn flat class="inheritBtn">
          <q-icon name="palette" />
          <q-toolbar-title>
            Centres d'intérêt
          </q-toolbar-title>
        </q-btn></a>
      </q-toolbar>

      <div slot="left">
        <!--
          Use <q-side-link> component
          instead of <q-item> for
          internal vue-router navigation
        -->
        <q-list no-border link inset-delimiter>
          <q-list-header>Liens externes</q-list-header>
          <q-item @click="launch('http://quasar-framework.org')">
            <q-item-side icon="perm_identity" />
            <q-item-main label="Linkedin" sublabel="quasar-framework.org" />
          </q-item>
          <q-item @click="launch('http://forum.quasar-framework.org')">
            <q-item-side icon="school" />
            <q-item-main label="Profil 42" sublabel="forum.quasar-framework.org" />
          </q-item>
          <q-item @click="launch('https://github.com/tbayet')">
            <q-item-side icon="call_split" />
            <q-item-main label="Github" sublabel="github.com/tbayet" />
          </q-item>
        </q-list>
        <div class="text-center" style="margin-top: 20px">
          <q-btn style="width: 60%" class="text-blue-grey-8">
            <q-icon name="picture_as_pdf" color="blue-grey-8" style="font-size: 8em;"></q-icon>
            <p>Mon CV en .PDF</p>
          </q-btn>
        </div>
      </div>
      <router-view />
    </q-layout>

  </div>
</template>

<script>
/*
 * Root component
 */

import {
  openURL,
  QLayout,
  QTab,
  QTabs,
  QRouteTab,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  components: {
    QLayout,
    QTab,
    QTabs,
    QRouteTab,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      me: {
        firstName: 'Thomas',
        lastName: 'Bayet',
        age: function () {
          let birthday = +new Date('1991-07-23')
          return ~~((Date.now() - birthday) / (31557600000))
        }
      }
    }
  },
  methods: {
    launch (url) {
      openURL(url)
    }
  }
}
</script>

<style>
  #q-app {
    background-color: white;
  }
  a {
    color: lightgray;
  }
  .inheritBtn:hover {
    background-color: white;
  }
</style>
