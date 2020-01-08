<template>
  <div>
    <v-navigation-drawer
        app
        clipped
    >
      <v-list>
        <v-list-item
            v-for="i in 3"
            :key="i"
            :to="{path: '/users' + i}"
        >
          <v-list-item-content>
            <v-list-item-title>Listes d'utilisateur</v-list-item-title>
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

export default {
  name: 'navbarAdmin',
  components: {
    //
  },
   data: () => ({
      //
    }),
    methods:{
    }
}

</script>
