<template>
  <div id="app">
    <UserAdmin/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserAdmin from "../components/UserAdmin";

export default {
  name: 'admin',
  components: {
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
