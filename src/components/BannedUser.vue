<template>
  <v-container fluid>
    <v-data-iterator
        :items="reportedUser"
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
                  <v-list-item-content>nom:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.name }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>email:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.email }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>description:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.description }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>date de naissance:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.birth }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>reports:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.reports }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>reports:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.reports }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-btn
                      color="primary"
                      @click="unBan(item)"
                  >UnBan</v-btn>
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
        }),
        computed: {
            ...mapGetters([
                'reportedUser'
            ]),
        },
        methods:{
            unBan(user){
                this.$store.dispatch("unBan",user._id);
            }
        }
    }
</script>

<style scoped>

</style>
