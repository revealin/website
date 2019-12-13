<template>
  <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline text-center">REVEALIN</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item class="px-3 text-justify">
        <v-list-item-content id="projectDescription">{{ description }}</v-list-item-content>
    </v-list-item>

    <v-card-actions class="d-flex mb-6">
      <v-btn
        text
        class="pa-2"
        id="btnInscription"
      >
        INSCRIPTION
      </v-btn>
      <v-btn
        text
        class="pa-2"
        id="btnTelecharger"
      >
        Télécharger
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    //
  },
  created() {
    //
  },
  data:() => ({
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend elit et interdum fringilla. Nam ante quam, eleifend id nibh at, suscipit efficitur risus. Vestibulum ultricies massa sit amet dui ultricies pharetra. Nunc vehicula euismod lorem at vestibulum. Nulla facilisis neque vitae nibh semper, at semper ex aliquet. Cras auctor leo purus, in pharetra purus interdum a. Proin mollis laoreet sem, non condimentum odio porta ac. Duis tincidunt nec nunc id pellentesque.',
    }),
    methods:{
    }
    this.$vuetify.theme.ligth = true;
  }
</script>
<style scoped>
  #projectDescription:hover
  {
      background-image:url("https://www.jqueryscript.net/images/Simplest-Lorem-Ipsum-Generator-With-jQuery-Ipsum-js.jpg");
      opacity:0.3;
  }
  #btnInscription
  {
      background-color:#bf78b2;
  }
  #btnTelecharger
  {
      background-color:#abe28e;
  }
</style>
