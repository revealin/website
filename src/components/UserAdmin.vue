<template>
    <v-data-table
            :headers="headers"
            :items="users"
            sort-by="calories"
            class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="Nom"/>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.email" label="Email"/>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.gender" label="Genre"/>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.createdAt" label="Crée"/>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.birth" label="Date de naissance"/>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.description" label="Description"/>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
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
        }),
        mounted() {
            this.$store.dispatch('loadUsers');
        },
        computed: mapState([
            'users',
        ]),
        methods: {
        },
    }
</script>

<style scoped>

</style>
