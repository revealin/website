<template>
  <div class="not-found-wrapper">
    <h1>{{ msg }}</h1>
    <router-link v-bind:to="'/'">Home</router-link>
  </div>


</template>

<script>
    export default {
        name: 'NotFound',
        data() {
            return {
                msg: 'Aie 404 ',
            };
        },
    };

</script>

<style scoped>

</style>
