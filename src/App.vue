<template>
  <v-app>
     <div id="app">
          <font-awesome-icon :icon="['fab', 'font-awesome']" />
      </div>
    <v-content>
      <router-view></router-view>
     
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    //
  },
  data: () => ({
    //
  })
};
</script>
