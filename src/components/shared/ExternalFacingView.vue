<template>
  <div class="d-flex flex-column space-between h-100">
    <v-row justify="center">
      <v-col align-self="center">
        <router-view :key="$route.fullPath" />
      </v-col>
    </v-row>
    <!-- <conference-footer /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainHeader from "./MainPage/Header.vue"
@Component({
  components: {
    MainHeader,
  },
})
export default class ExternalFacingView extends Vue {

}
</script>

<style lang="scss"></style>