<template>
  <v-container fluid>
    <v-data-iterator
        :items="items"
        item-key="name"
        :items-per-page="4"
        :single-expand="expand"
        hide-default-footer
    >
      <template v-slot:default="{ items, isExpanded, expand }">
        <v-row>
          <v-col
              v-for="item in items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
          >
            <v-card>
              <v-card-title>
                <h4>{{ item.name }}</h4>
              </v-card-title>
              <v-switch
                  :input-value="isExpanded(item)"
                  :label="isExpanded(item) ? 'Expanded' : 'Closed'"
                  class="pl-4 mt-0"
                  @change="(v) => expand(item, v)"
              />
              <v-divider/>
              <v-list v-if="isExpanded(item)" dense>
                <v-list-item>
                  <v-list-item-content>Nom :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.name }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Email :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.email }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Description :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.description }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>reports :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.reports }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-btn
                      color="primary"
                  >Bannir</v-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ReportAdmin.vue",
        data: () => ({
            expand: true,
            items: [
                {
                    name: 'Bertrand',
                    email: "betrand@gmail.com",
                    description: "ccedcqdncezjfbc",
                    reports: 24,
                },
                {
                    name: 'Jack',
                    email: "jack@gmail.com",
                    description: "denaildfezjfipze",
                    reports: 34,
                },
            ],
        }),
        computed: {
            ...mapGetters([
                'reportedUser'
            ]),
        }
    }
</script>

<style scoped>

</style>
