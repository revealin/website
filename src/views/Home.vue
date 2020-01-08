<template>
  <div class="home">
    <v-content>
      <blocPresentation/>
    </v-content>
    <!--<v-footer absolute>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>RevealIn</strong>
      </v-col>
    </v-footer>-->
  </div>
</template>

<script>
    // @ is an alias to /src
    import blocPresentation from '@/components/blocPresentation';
    export default {
        name: 'home',
        components: {
            blocPresentation
        },
        data: () => ({}),
    }
</script>

<style scoped>
  .home{
    padding-top: 25px;
  }
  .theme--light.v-sheet
  {
    background-color:inherit;
  }
</style>
