<template>
  <div>
    <v-layout row>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">UTILISATEURS</p>
      </v-list-item>
    </v-card>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">MATCHS</p>
      </v-list-item>
    </v-card>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">OUI</p>
      </v-list-item>
    </v-card>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">NON</p>
      </v-list-item>
    </v-card>
  </v-layout>
  <v-layout row>
    <v-card
      class="ml-3 mt-3 test"
      width="400"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">MESSAGES ENVOYES</p>
      </v-list-item>
    </v-card>
    <v-card
      class="ml-3 mt-3 test"
      width="400"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">PHOTOS ENVOYEES</p>
      </v-list-item>
    </v-card>
  </v-layout>
  <v-layout row>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">FACEBOOK</p>
      </v-list-item>
    </v-card>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">TWITTER</p>
      </v-list-item>
    </v-card>
    <v-card
      class="ml-3 mt-3 test"
      max-width="200"
      outlined
    >
      <v-list-item class="blocNumberData">
        <p class="numberData mx-auto">:data</p>
      </v-list-item>

      <v-list-item class="blocNameData">
          <p class="nameData mx-auto">INSTAGRAM</p>
      </v-list-item>
    </v-card>
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
      //
    }),
}
</script>

<style>
    .blocNumberData
    {
      background-color:#e1f59a;  
      margin-bottom:0 !important;
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

  
</style>