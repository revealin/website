<template>
   <div>
       <h2>Liste d'utilisateurs</h2>
    <v-data-table
            :headers="headers"
            :items="users"
            sort-by="calories"
            class="elevation-1"
    >
        <template v-slot:item.action="{ item }">
            <v-icon
                small
                @click="deleteItem(item)"
            >
                delete
            </v-icon>
        </template>
    </v-data-table>
   </div>
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
