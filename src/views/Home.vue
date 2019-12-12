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

    <v-list-item-content id="projectDescription" class="px-3 text-justify" @hover="displayLogo">
        {{description}}
    </v-list-item-content>

    <v-card-actions>
      <v-btn
        text
        color="deep-red accent-4"
      >
        INSCRIPTION
      </v-btn>
      <v-btn
        text
        color="deep-green accent-4"
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
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dictum augue, eget dictum justo pharetra sit amet. Cras nec neque sit amet lacus auctor commodo. Quisque eleifend ultricies justo ac rutrum. Sed sodales pharetra nibh vitae sollicitudin. Donec nec auctor diam. Curabitur euismod sem ut gravida tempor. Vestibulum ac nibh vel purus mattis pharetra at eu tellus. Nunc id porttitor justo. Sed eleifend dolor sed viverra dictum. Vestibulum hendrerit vel nisl id ullamcorper. Vestibulum mauris justo, aliquet nec augue eu, eleifend imperdiet nunc.'
      }),
    methods:{
    displayLogo:function(){
      this.data.description="Hello"
    }
    this.$vuetify.theme.ligth = true;
  }
}
</script>
