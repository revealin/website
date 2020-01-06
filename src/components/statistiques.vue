<template>
  <div>
    <v-layout class="ml-5" row>
    <!-- UTILISATEURS -->
      <v-card class="ml-3 mt-3" max-width="200" outlined>
        <v-list-item class="blocNumberData">
          <p class="numberData mx-auto">:data</p>
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
      <v-card class="text-center mt-3 ml-3" color="#e1f59a" dark max-width="600" max-height="250">
      <v-card-text>
        <v-sheet color="#e1f59a">
          <v-sparkline :value="value" color="#bf78b2" height="100" padding="24" stroke-linecap="round"
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
    <v-card class="ml-3 mt-3 bloc" width="400" max-height="250" outlined>
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
export default {
    name: 'statistiques',
  components: {
    //
  },
   data: () => ({
     value: [
        423,
        800,
        675,
        510,
        590,
        610,
        760,
      ],
 
      //
    }),
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
      background-color:#e1f59a;  
      border:solid 2px #bf78b2;
      border-bottom:none;
    }

    .numberData
    {
      font-size:60px;
      color:#bf78b2;
      margin:0 !important;
      font-weight:800;
    }

    .blocNameData
    {
      background-color:#e1f59a;
      border:solid 2px #bf78b2;
      border-top:none;
   
    }

    .nameData
    {
      color:#bf78b2;
      font-size:20px;
    }

    .blocGraph
    {
      border:solid 2px #bf78b2;
    }

  
</style>