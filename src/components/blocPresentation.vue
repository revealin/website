<template>
<div>
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
  <v-card height="50" class="mt-5">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Revealin</strong>
      </v-col>
    </v-footer>
  </v-card>
  </div>
</template>
<script>
    export default {
        name: 'blocPresentation',
        created() {
            this.$vuetify.theme.ligth = true;
        },
        data:() => ({
            description:'Le projet Revealin vous permet de découvrir une nouvelle façon de découvrir l’autre. Une rencontre avec une personnalité plus qu’un visage ou qu’un corps. Revealin est une application de rencontre où vont défiler des descriptions chacune accompagnée d’un prénom. Une fois vos deux profils connectés, vous pouvez entamer la discussion toujours dans le mystère absolu de l’apparence de votre interlocuteur. A tout moment, lui ou vous peut proposer de dévoiler une photo enregistrée sur votre compte. Découvrez une nouvelle manière de rencontrer de nouvelles personnes. Téléchargez l\'application sur le PlayStore.',
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
                v => (v && v.length >= 2) || 'Password must have 8+ characters',
            ],
        }),
        methods:{
            login: function() {
               let data = {
                   'email': this.email,
                   'password': this.password,
               }
                this.$store
                    .dispatch("login", data)
                    .then(() => this.$router.push("/admin/Statistiques"))
                    .catch(err => console.log(err));
            }
        }
    }
</script>
<style scoped>
  /*#projectDescription:hover
  {
    background-image:url("https://www.jqueryscript.net/images/Simplest-Lorem-Ipsum-Generator-With-jQuery-Ipsum-js.jpg");
    opacity:0.3;
  }*/
  #btnInscription
  {
    background-color:#abe28e;
    padding:10px ;
    margin:10px ;
  }
</style>
