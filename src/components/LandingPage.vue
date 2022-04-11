<template>
  <div>
    <v-row justify="center">
      <router-link :to="{ name: 'Books' }"> Go To Books </router-link>
    </v-row>
    <v-row justify="center" class="mt-10">
      <router-link :to="{ name: 'Authors' }"> Go To Authors </router-link>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MainHeader extends Vue {}
</script>
