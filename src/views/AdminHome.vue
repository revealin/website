<template>
  <div>
    <!--<navbarAdmin/>-->
    <statistiques/>
  </div>
</template>

<script>
// @ is an alias to /src
import statistiques from '@/components/statistiques'

export default {
  name: 'admin',
  components: {
    statistiques
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