<template>
  <div>
    <v-row>
      <v-col v-for="(book, i) in books" :key="i" :cols="!showCondensedVersion ? 4 : 12">
        <v-card @click="takeToBook(book)" class="d-flex flex-column align-center justify-center" height="400">
          <v-img
            :src="book.coverImageUrl"
            height="200px"
          ></v-img>

          <v-card-title>{{book.title}}</v-card-title>

          <v-card-subtitle> Publisher: {{book.publisher}} </v-card-subtitle>

          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { books } from "../../Datastore.json";
import { Book } from "../model/book";
@Component
export default class MainHeader extends Vue {
  books: Book[] = books;
  takeToBook(book: Book): void {
      this.$router.push({name: "Book", params: {id: book.id.toString()}})
  }
  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }
}
</script>
