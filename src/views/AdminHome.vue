<template>
  <div>
      <v-layout>
        <navbarAdmin/>
        <statistiques/>
      </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import statistiques from '@/components/statistiques'
import navbarAdmin from '@/components/navbarAdmin'

export default {
  name: 'admin',
  components: {
    statistiques,
    navbarAdmin
  },
  props:{
    value:String
  },
   data: () => ({
        dynamicComponent:{
        template:'<p>Wheee</p>'
      }
    }),
}

</script>