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
          v-model="searchAuthor"
          @keyup="updateAfterSearch"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(author, i) in historyList"
        :key="i"
        :cols="!showCondensedVersion ? 4 : 12"
      >
        <v-card
          @click="takeToAuthor(author)"
          class="d-flex flex-column align-center justify-center"
          height="400"
        >
          <v-img :src="author.imageUrl" height="200px"></v-img>

          <v-tooltip
            bottom
            :open-on-click="showCondensedVersion"
            :open-on-hover="!showCondensedVersion"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card-title
                v-bind="attrs"
                v-on="isOverflown() ? on : undefined"
                ref="author"
                class="truncate font-weight-600"
                >{{ author.firstName }} {{ author.lastName }}</v-card-title
              >
            </template>
            <span>{{ author.firstName }} {{ author.lastName }}</span>
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
import { authors } from "../../Datastore.json";
import { Author } from "../model/author";
@Component
export default class MainHeader extends Vue {
  authors: Author[] = authors;
  searchAuthor = "";
  page = 1;
  pageSize = 6;
  listCount = 0;
  historyList: any[] = [];

  get pages() {
    if (this.pageSize == null || this.listCount == null) return 0;
    return Math.ceil(this.listCount / this.pageSize);
  }
  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }
  get filteredBooks(): any[] {
    const toReturn: any[] = [];
    this.authors.forEach((a) => {
      if (
        a.firstName.toLowerCase().startsWith(this.searchAuthor.toLowerCase())
      ) {
        toReturn.push(a);
      }
    });
    return toReturn;
  }
  takeToAuthor(author: Author): void {
    this.$router.push({ name: "Author", params: { id: author.id.toString() } });
  }
  isOverflown(): boolean {
    const element = this.$refs.author as any;
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
