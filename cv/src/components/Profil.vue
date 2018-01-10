<template>
  <q-card id="profil" class="bg-white">
    <q-card-title class="bg-light">
      Profil
      <q-icon slot="right" name="person" />
    </q-card-title>
    <q-card-main style="margin-top: 10px">
      <div class="row">
        <div class="col-sm-5 col-xs-12">
          <q-card-media overlay-position="full" class="text-center uppercase text-bold highlight-text">
            <video src="../statics/profil.mp4" width="100%" autoplay loop muted style="object-fit: cover" />
            <q-carousel slot="overlay" infinite autoplay class="qualities">
              <div v-for="(quality, $index) in qualities[0]" :key="$index" slot="slide">
                {{ quality }}
              </div>
            </q-carousel>
            <q-carousel slot="overlay" infinite autoplay class="qualities">
              <div v-for="(quality, $index) in qualities[1]" :key="$index" slot="slide">
                {{ quality }}
              </div>
            </q-carousel>
            <q-carousel slot="overlay" infinite autoplay class="qualities">
              <div v-for="(quality, $index) in qualities[2]" :key="$index" slot="slide">
                {{ quality }}
              </div>
            </q-carousel>
          </q-card-media>
          <div style="margin-top: 20px; margin-left: 35px; margin-right: 35px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87850.35816922733!2d2.210648229737554!3d48.90601274924527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f7d03e984ab%3A0xce1d395e61609e94!2sAsni%C3%A8res-Sur-Seine!5e0!3m2!1sfr!2sfr!4v1511367754413"
                  width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-sm-7 col-xs-12">
          <div>
            <q-list highlight>
              <q-list-header>Langues</q-list-header>
              <q-item v-for="(lang, index) in langs" :key="index" @click="openModal(index)">
                <q-item-side :avatar="lang.flag" />
                <q-item-main>
                  <q-item-tile label>{{ lang.name }}</q-item-tile>
                  <q-item-tile sublabel><q-progress :percentage="moy(lang.notes)*10" color="teal-4" stripe animate style="height: 20px" /></q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>

            <q-modal :content-css="{padding: '50px', borderRadius: '50%'}" minimized v-model="open">
              <div class="row">
                <q-knob color="deep-orange-13" size="120px" readonly :min="0" :max="10" :value="langs[selectedLang].notes[0]">Lu</q-knob>
                <q-knob color="light-green-13" size="120px" readonly :min="0" :max="10" :value="langs[selectedLang].notes[1]">Ecrit</q-knob>
              </div>
              <div class="row">
                <q-knob color="indigo-14" size="120px" readonly :min="0" :max="10" :value="langs[selectedLang].notes[2]">Ecouté</q-knob>
                <q-knob color="amber-13" size="120px" readonly :min="0" :max="10" :value="langs[selectedLang].notes[3]">Parlé</q-knob>
              </div>
            </q-modal>
          </div>
          <q-list-header>Formulaire de Contact</q-list-header>
          <div id="form" v-if="mailSent" class="text-center">
            <q-alert color="positive" icon="done">
              <p>Votre message a bien été envoyé</p>
              <q-btn color="white" class="text-black" @click="resetMail()">
                Renvoyer un message
              </q-btn>
            </q-alert>

          </div>
          <div id="form" v-if="!mailSent">
            <q-input :error="$v.form.subject.$error" @blur="$v.form.subject.$touch" color="secondary" v-model="form.subject" type="text" placeholder="Votre profil m'interesse !" float-label="Sujet" />
            <q-input :error="$v.form.email.$error" @blur="$v.form.email.$touch" max-length="200" color="secondary" v-model="form.email" type="email" placeholder="adresse@mail.com" float-label="Votre adresse email" />
            <q-input :error="$v.form.text.$error" @blur="$v.form.text.$touch" :min-rows="8" max-length="6666" color="secondary" v-model="form.text" type="textarea" placeholder="Message..." float-label="Votre message" />
            <q-btn :color="validate_color()" class="full-width" @click="sendmail(form)">Envoyer</q-btn>
          </div>
        </div>
      </div>
    </q-card-main>
  </q-card>
</template>

<script>
import {
  QItem,
  QList,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QItemTile,
  QListHeader,
  QVideo,
  QCard,
  QCardTitle,
  QCardMain,
  QCardMedia,
  QCarousel,
  QKnob,
  QModal,
  QProgress,
  QInput,
  QBtn,
  Toast,
  QAlert,
  QIcon
} from 'quasar'

import { required, email, maxLength, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      open: false,
      langs: [
        {
          name: 'Français',
          notes: [10, 10, 10, 9],
          flag: '../statics/flags/france.png'
        },
        {
          name: 'Anglais',
          notes: [8, 7, 7, 4],
          flag: '../statics/flags/england.png'
        }
      ],
      qualities: [
        [
          'Rigoureux',
          'Méthodique',
          'Polyvalent',
          'Structuré',
          'Cohérent',
          'Astucieux',
          'Coopératif'
        ], [
          'Autodidacte',
          'Observateur',
          'Médiateur',
          'Entousiaste',
          'Consciliant',
          'Raisonné',
          'Progressiste'
        ], [
          'Positif',
          'Intègre',
          'Créatif',
          'Respectueux',
          'Solidaire',
          'Idéaliste'
        ]
      ],
      selectedLang: 0,
      openModal: function (selectedLang) {
        console.log('hello', selectedLang)
        this.selectedLang = selectedLang
        this.open = true
      },
      form: {
        email: undefined,
        subject: undefined,
        text: undefined
      },
      mailSent: false
    }
  },
  validations: {
    form: {
      email: {required, email},
      subject: {required, minLength: minLength(2), maxLength: maxLength(42)},
      text: {required, minLength: minLength(30), maxLength: maxLength(4200)}
    }
  },
  methods: {
    resetMail: function () {
      this.form.email = undefined
      this.form.subject = undefined
      this.form.text = undefined
      this.mailSent = false
    },
    validate_color: function () {
      if (this.$v.form.$error) {
        return 'negative'
      }
      else {
        return 'blue-grey-8'
      }
    },
    sendmail: function (params) {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        Toast.create.negative({
          html: 'Veuillez remplir correctement le formulaire'
        })
      }
      else {
        this.$http.get('http://localhost:3000/api/sendmail', {params: params}).then(response => {
          console.log('mail sent')
          this.mailSent = true
        }, response => {
          console.log('mail not sent')
          Toast.create.negative({
            html: 'Une erreur est survenue, votre message n\'a pas pu être envoyé'
          })
        })
      }
    },
    moy: function (numbers) {
      let sum = 0
      let i = 0
      while (numbers[i]) {
        sum += numbers[i++]
      }
      return (sum / i)
    }
  },
  components: {
    QItem,
    QList,
    QItemSide,
    QItemMain,
    QItemSeparator,
    QItemTile,
    QListHeader,
    QVideo,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCarousel,
    QKnob,
    QModal,
    QProgress,
    QInput,
    QBtn,
    QAlert,
    QIcon
  }
}
</script>

<style>
  .highlight-text {
    text-shadow: 1px 1px 5px black;
    font-size: 2vw;
  }
  #form {
    margin-left: 20px;
  }
  #form *:first-child {
    margin-top: 0;
  }
  .qualities {
    width:100%;
    height: 33%;
    background-color: rgba(255,255,255,0.4);
  }
  .qualities:nth-child(2) {
    background-color: rgba(255,255,255,0.1);
  }
</style>
