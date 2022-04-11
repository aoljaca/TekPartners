<template>
  <div>
    <router-link :to="{ name: 'Books' }">
      Go To Books
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MainHeader extends Vue {}
</script>
