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

    <v-card-actions id="blocButton" class="flex justify-lg-space-between">
      <v-btn 
        text
        class=""
        id="btnInscription"
      >
        Inscription
      </v-btn>
      <v-btn
        text
        class=""
        id="btnTelecharger"
      >
        Télécharger
      </v-btn>
    </v-card-actions>
  </v-card>

</template>
<script>
export default {
  name: 'blocPresentation',
  created() {
      this.$vuetify.theme.ligth = true;
  },
  data:() => ({
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend elit et interdum fringilla. Nam ante quam, eleifend id nibh at, suscipit efficitur risus. Vestibulum ultricies massa sit amet dui ultricies pharetra. Nunc vehicula euismod lorem at vestibulum. Nulla facilisis neque vitae nibh semper, at semper ex aliquet. Cras auctor leo purus, in pharetra purus interdum a. Proin mollis laoreet sem, non condimentum odio porta ac. Duis tincidunt nec nunc id pellentesque.',
    }),
    methods:{
    }
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
      width:50%;
      padding:0;
      margin:0;
      height:75px;     
  }
  #btnTelecharger
  {
      background-color:#abe28e;
      width:50%;
      padding:0;
      margin:0;
      height:75px
  }
  #blocButton
  {
    width:100%;
    display:inline-block;
  }
</style>