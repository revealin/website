<template>
  <v-data-table
      :headers="headers"
      :items="users"
      :search="newSearch"
  >

<template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-items> <v-text-field v-model="newSearch" label="Search"/></v-toolbar-items>
        <v-divider
            class="mx-4"
            inset
            vertical
        />
        <v-spacer/>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label=" name"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.gender" label="genre"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.description" label="Description"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
    import {mapState} from "vuex";

    export default {
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
            defaultItem: {
                name: '',
                email: '',
                gender: '',
                createdAt: '',
                birth: '',
                description: '',
            },
            editedItem: {
                name: '',
                email: '',
                gender: '',
                createdAt: '',
                birth: '',
                description: '',
            },
            newSearch:'',
        }),
        created() {
            this.$store.dispatch('loadUsers');
        },
        updated() {
            this.$store.dispatch('loadUsers');
        },
        computed: mapState([
            'users',
        ]),
        methods: {
            editItem (item) {
                this.editedIndex = this.users.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
               let data = {
                   'id': this.editedItem._id,
                   'name':this.editedItem.name,
                   'email': this.editedItem.email,
                   'gender': this.editedItem.gender,
                   'description': this.editedItem.description,
                };
                this.$store.dispatch('editUser',data);
                this.close()
            },
        },
    }
</script>
