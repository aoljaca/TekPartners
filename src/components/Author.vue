<template>
  <div>
      <v-row justify="center" align="center" v-if="author">
          <v-card class="d-flex flex-column align-center justify-center" height="400">
          <v-img
            :src="author.imageUrl"
            height="200px"
          ></v-img>

          <v-card-title>{{ author.firstName }} {{ author.lastName }}</v-card-title>
        </v-card>
      </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {authors} from "../../Datastore.json";
import {Author} from "../model/author"
@Component
export default class MainHeader extends Vue {
  authors: Author[] = authors;
  author: Author | null = null;
  mounted(): void {
    this.authors.forEach((a) => {
      if (a.id === Number(this.$route.params.id)) {
        this.author = a;
      }
    })
  }
}
</script>
