<template>
  <div>
    <!--<navbarAdmin/>
    <statistiques/>-->
  <UserAdmin/>
  </div>
</template>

<script>
// @ is an alias to /src
// import statistiques from '@/components/statistiques'
// import navbarAdmin from "../components/navbarAdmin";
import UserAdmin from "../components/UserAdmin";
export default {
  name: 'admin',
  components: {
    // statistiques,
    // navbarAdmin
      UserAdmin,
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
