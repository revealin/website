<template>
  <v-card max-width="344" class="mx-auto">
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
        Télécharger
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-title>Admin Login</v-card-title>
        <v-card-text>
          <v-form v-model="isValid">
            <v-text-field
                label="Email"
                v-model="email"
                :rules="emailRules"
                required
            />
            <v-text-field
                label="Password"
                v-model="password"
                type="password"
                :rules="passwordRules"
                required
            />
            <v-btn
                color="primary"
                :disabled="!isValid"
                @click.prevent="login"
            >Login</v-btn>
          </v-form>
        </v-card-text>
      </div>
    </v-expand-transition>
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
            show: false,
            email: '',
            password: '',
            isValid: false,
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password must have 8+ characters',
            ],
        }),
        methods:{
            login: function() {
                let data = {
                    email: this.email,
                    password: this.password,
                }
                this.$store
                    .dispatch("login", data)
                    .then(() => this.$router.push("/admin"))
                    .catch(err => console.log(err));
            },
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
    background-color:#abe28e;
    padding:10px ;
    margin:10px ;
  }
</style>
