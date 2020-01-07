<template>
  <v-flex xs12="xs12">
    <v-card>
      <v-card-title>Users List
        <v-spacer/>
        <v-text-field v-model="newSearch" label="Search"/>
      </v-card-title>
      <v-data-table :headers="headers"  :items="users" :search="newSearch">
        <template v-slot:item.action="{ item }">
          <v-icon
              small
              @click="deleteItem(item)"
          >
            delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-flex>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: "UserAdmin.vue",
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: 'Utilisateur',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'genre', value: 'gender' },
                { text: 'Date de creation', value: 'createdAt' },
                { text: 'date de naissance', value: 'birth' },
                { text: 'description', value: 'description' },
                { text: 'Actions', value: 'action', sortable: false },
            ],
            editedItem: {
                name: '',
                email: '',
                gender: '',
                createdAt: '',
                birth: '',
                description: '',
            },
            defaultItem: {
                name: '',
                email: '',
                gender: '',
                createdAt: '',
                birth: '',
                description: '',
            },
            newSearch:'',
        }),
        mounted() {
            this.$store.dispatch('loadUsers');
        },
        computed: mapState([
            'users',
        ]),
        methods: {
            deleteItem:function (item) {
              console.log(item);
            }
        },
    }
</script>

<style scoped>

</style>
