<template>
  <v-card>
    <v-navigation-drawer
      permanent
    >
      <template v-slot:prepend>
        <v-list>
         <v-list-item
            link
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">REVEALIN</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>


      <v-list
        nav
        dense
      >
        <v-list-item v-on:click="utilisateur();" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title on:click>Utilisateurs</v-list-item-title>
        </v-list-item>
        <v-list-item v-on:click="signalement();" link>
          <v-list-item-icon>
            <v-icon>mdi-alert-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Signalements</v-list-item-title>
        </v-list-item>
        <v-list-item v-on:click="bannissement();" link>
          <v-list-item-icon>
            <v-icon>mdi-cancel</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Bannissements</v-list-item-title>
        </v-list-item>
        <v-list-item v-on:click="statistique();" link>
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Statistiques du site</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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