<template>
  <div>
    <v-navigation-drawer class="navBar" app clipped>
      <v-list>
        <v-list-item v-for="i in navBar" :key="i" :to="{path: '/admin' + i}">
          <v-list-item-content>
            <v-list-item-title class="navBarItem">{{ i }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        clipped-left
    >
      <v-toolbar-title>Admin home</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  name: 'navbarAdmin',
  components: {
    //
  },
   data: () => ({
      //
    }),
    methods:{
    }, 
    computed:mapState([
      'navBar'
    ])
}

</script>

<style scoped>
  .navBar
  {
    background: #2c3a52 !important;
    
  }
  .navBarItem
  {
    color:White !important;
    margin-bottom:15px;
  }
</style>
