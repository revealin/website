<template>
  <div class="home">
    <v-content>
      <blocPresentation/>
    </v-content>
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
