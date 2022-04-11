<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          label="Search"
          single-line
          hide-details
          dense
          prepend-icon="mdi-magnify"
          v-model="searchBook"
          @keyup="updateAfterSearch"
        />
      </v-col>
      <v-col cols="auto">
        <v-dialog v-model="filterDialog" max-width="290" class="bg-green">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="bg-green" dark v-bind="attrs" v-on="on">
              Filters
            </v-btn>
          </template>
          <v-card
            class="set-opactiy bg-green font-weight-bold overflow-auto"
            dark
            height="350"
          >
            <div class="pa-4 d-flex align-center display-center">
              <v-range-slider
                hint="Years"
                min="1800"
                max="2000"
                v-model="bookYearRange"
                @change="updateAfterSearch"
              ></v-range-slider>
            </div>
            <div>
              {{bookYearRange}}
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(book, i) in historyList"
        :key="i"
        :cols="!showCondensedVersion ? 4 : 12"
      >
        <v-card
          @click="takeToBook(book)"
          class="d-flex flex-column align-center justify-center"
          height="400"
        >
          <v-img :src="book.coverImageUrl" height="200px"></v-img>

          <v-tooltip
            bottom
            :open-on-click="showCondensedVersion"
            :open-on-hover="!showCondensedVersion"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card-title
                v-bind="attrs"
                v-on="isOverflown() ? on : undefined"
                ref="roomName"
                class="truncate font-weight-600"
                >{{ book.title }}</v-card-title
              >
            </template>
            <span>{{ book.title }}</span>
          </v-tooltip>

          <v-tooltip
            bottom
            :open-on-click="showCondensedVersion"
            :open-on-hover="!showCondensedVersion"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card-subtitle
                v-bind="attrs"
                v-on="isOverflown() ? on : undefined"
                ref="book"
                class="truncate font-weight-600"
              >
                Publisher: {{ book.publisher }}
              </v-card-subtitle>
            </template>
            <span>{{ book.publisher }}</span>
          </v-tooltip>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-pagination
        class="pagination mb-15"
        v-model="page"
        :length="pages"
        @input="updatePage"
      ></v-pagination>
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
  searchBook = "";
  page = 1;
  pageSize = 6;
  listCount = 0;
  historyList: any[] = [];
  bookYearRange = [1800, 2000];
  filterDialog = false;

  get pages() {
    if (this.pageSize == null || this.listCount == null) return 0;
    return Math.ceil(this.listCount / this.pageSize);
  }
  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }
  get filteredBooks(): any[] {
    const toReturn: any[] = [];
    this.books.forEach((b) => {
      if (
        b.title.toLowerCase().startsWith(this.searchBook.toLowerCase()) &&
        b.year > this.bookYearRange[0] &&
        b.year < this.bookYearRange[1]
      ) {
        toReturn.push(b);
      }
    });
    return toReturn;
  }
  takeToBook(book: Book): void {
    this.$router.push({ name: "Book", params: { id: book.id.toString() } });
  }
  isOverflown(): boolean {
    const element = this.$refs.book as any;
    if (element) {
      return element!.scrollWidth > element.clientWidth;
    }
    return false;
  }
  updatePage(pageIndex: number) {
    // m.title.toLowerCase().startsWith(this.searchText)
    let start = (pageIndex - 1) * this.pageSize;
    let end = pageIndex * this.pageSize;
    this.historyList = this.filteredBooks.slice(start, end);
    this.page = pageIndex;
  }
  initPage() {
    this.listCount = this.filteredBooks.length;
    if (this.listCount < this.pageSize) {
      this.historyList = this.filteredBooks;
    } else {
      this.historyList = this.filteredBooks.slice(0, this.pageSize);
    }
  }
  created() {
    this.initPage();
    this.updatePage(this.page);
  }
  updateAfterSearch() {
    this.initPage();
    this.updatePage(this.page);
  }
}
</script>
<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
