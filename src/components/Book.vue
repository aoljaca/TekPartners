<template>
  <div>
      <v-row justify="center" align="center" v-if="book">
          <v-card class="d-flex flex-column align-center justify-center" height="400">
          <v-img
            :src="book.coverImageUrl"
            height="200px"
          ></v-img>

          <v-card-title>{{book.title}}</v-card-title>

          <v-card-subtitle> Publisher: {{book.publisher}} </v-card-subtitle>

          <v-card-text> </v-card-text>
        </v-card>
      </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {books} from "../../Datastore.json";
import {Book} from "../model/book"
@Component
export default class MainHeader extends Vue {
  books: Book[] = books
  book: Book | null = null;
  mounted(): void {
    this.books.forEach((b) => {
      if (b.id === Number(this.$route.params.id)) {
        this.book = b;
      }
    })
  }
}
</script>
