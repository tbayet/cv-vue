<template>
  <div>
    <time-line></time-line>
    <technologies></technologies>
    <profil></profil>
    <hobbies></hobbies>
  </div>
</template>

<script>
import TimeLine from './TimeLine.vue'
import Technologies from './Technologies.vue'
import Profil from './Profil.vue'
import Hobbies from './Hobbies.vue'

export default {
  name: 'index',
  components: {
    TimeLine,
    Technologies,
    Profil,
    Hobbies
  }
}
</script>

<style lang="stylus">
</style>
