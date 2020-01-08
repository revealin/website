<template>
  <div>
    <v-layout class="ml-5" row>
    <!-- UTILISATEURS -->
      <v-card class="ml-3 mt-3" max-width="200" outlined>
        <v-list-item class="blocNumberData">
          <p class="numberData mx-auto">{{ countUsers }}</p>
        </v-list-item>
        <v-list-item class="blocNameData">
            <p class="nameData mx-auto">UTILISATEURS</p>
        </v-list-item>
      </v-card>
    <!-- FIN UTILISATEURS -->
    <!-- MATCHS -->
    <v-card class="ml-3 mt-3" max-width="200" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>
      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">MATCHS</p>
      </v-list-item>
    </v-card>
    <!-- FIN MATCHS -->
    <!-- OUI -->
    <v-card class="ml-3 mt-3" max-width="200" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>
      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">OUI</p>
      </v-list-item>
    </v-card>
    <!-- FIN OUI -->
    <!-- NON -->
    <v-card class="ml-3 mt-3" max-width="200" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>
      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">NON</p>
      </v-list-item>
    </v-card>
    <!-- FIN NON -->
    </v-layout>
    <v-layout class="ml-5" row>
      <!-- RESEAUX SOCIAUX -->
     <v-card class="ml-3 mt-3" max-width="200" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>
      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">FACEBOOK</p>
      </v-list-item>
    </v-card>
    <v-card class="ml-3 mt-3" max-width="200" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>
      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">TWITTER</p>
      </v-list-item>
    </v-card>
    <!-- -->
    <v-card class="ml-3 mt-3" max-width="200" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>
      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">INSTAGRAM</p>
      </v-list-item>
    </v-card>
    </v-layout>
    <v-layout class="ml-5" row>
    <!-- GRAPH -->
      <v-card class="text-center mt-3 ml-3" color="#362F55" dark max-width="600" max-height="250">
      <v-card-text>
        <v-sheet color="#362F55">
          <v-sparkline :value="value" color="#B9CEF3" height="100" padding="24" stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item">
              {{ item.value }}
            </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="display-1 font-weight-thin nameData">Nombre d'utilisateurs/mois</div>
      </v-card-text>
      </v-card>
    </v-layout>
    <v-layout row class="mb-3 ml-5">
      <!-- MESSAGES ENVOYES -->
    <v-card class="ml-3 mt-3 bloc" width="400" max-height="250" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">MESSAGES ENVOYES</p>
      </v-list-item>
    </v-card>
    <!-- FIN MESSAGES ENVOYES -->
    <!-- PHOTOS ENVOYEES -->
    <v-card class="ml-3 bloc" width="400" max-height="250" outlined>
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">PHOTOS ENVOYEES</p>
      </v-list-item>
    </v-card>
    <!-- FIN PHOTOS ENVOYEES -->
  </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Statistiques',
  components: {
    //
  },
   data: () => ({
     value: [
        356, 
        564,
        789,
        689,
        900
      ],
 
      //
    }),
    computed:{
      ...mapGetters([
      'countUser'
    ])
    }
}
</script>

<style>

    .bloc
    {
      border:none !important;
      background-color: transparent !important;
      padding-top:50px;
    }

    .blocNumberData
    {
      background-color:#362F55;  
      border:solid 2px #B9CEF3;
      border-bottom:none;
    }

    .numberData
    {
      font-size:60px;
      color:#B9CEF3;
      margin:0 !important;
      font-weight:800;
    }

    .blocNameData
    {
      background-color:#362F55;
      border:solid 2px #B9CEF3;
      border-top:none;
   
    }

    .nameData
    {
      color:#B9CEF3;
      font-size:20px;
    }

    .blocGraph
    {
      border:solid 2px #B9CEF3;
    }

  
</style>