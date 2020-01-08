<template>
  <v-app>
    <NavBarAdmin v-if="isLoggedIn"/>
    <v-content fluid >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import NavBarAdmin from '@/components/navbarAdmin'
  import {mapGetters} from 'vuex';

  export default {
  name: "App",

  components: {
      NavBarAdmin
    },
  computed: mapGetters([
    'isLoggedIn',
   ]),
  data: () => ({

  })
};
</script>
