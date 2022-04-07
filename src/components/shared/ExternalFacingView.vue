<template>
  <div class="d-flex flex-column space-between h-100">
    <v-app-bar elevation="2" class="d-flex justify-center bg" color="blue" max-height="60"><h2>TekPartners</h2></v-app-bar>
    <v-row justify="center" class="mt-10 mx-10">
      <v-col align-self="center">
        <router-view :key="$route.fullPath" />
      </v-col>
    </v-row>
    <!-- <conference-footer /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./Shared/Header.vue"
@Component({
  components: {
    Header,
  },
})
export default class ExternalFacingView extends Vue {

}
</script>

<style lang="scss"></style>