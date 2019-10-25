<template>
  <div class="pagination-control">
    <button
      v-if="currentPage > 1"
      @click="setCurrentPage(currentPage - 1)"
      class="pagination-control__button"
    >&lt;</button>
    <button
      v-if="currentPage > 2"
      @click="setCurrentPage(1)"
      :class="{'pagination-control__button': true, 'pagination-control__button--active': pageIsCurrent(1)}"
    >{{ 1 }}</button>
    <span v-if="currentPage > 3">..</span>
    <span v-if="currentPage > countOfPages - 3">..</span>
    <button
      v-for="pageNumber in middlePages"
      :key="pageNumber"
      @click="setCurrentPage(pageNumber)"
      :class="{'pagination-control__button': true, 'pagination-control__button--active': pageIsCurrent(pageNumber)}"
    >{{ pageNumber }}</button>
    <span v-if="currentPage < countOfPages - 2">..</span>
    <span v-if="currentPage < 4">..</span>
    <button
      @click="setCurrentPage(countOfPages)"
      v-if="currentPage < countOfPages - 1"
      :class="{'pagination-control__button': true, 'pagination-control__button--active': pageIsCurrent(countOfPages)}"
    >{{ countOfPages }}</button>
    <button
      v-if="currentPage < countOfPages"
      @click="setCurrentPage(currentPage + 1)"
      class="pagination-control__button"
    >&gt;</button>
  </div>
</template>

<script>
export default {
  name: "Catalogue",
  props: {
    itemsCount: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    countOfPages() {
      return Math.ceil(this.itemsCount / this.itemsPerPage);
    },
    middlePages() {
      if (this.countOfPages < 4) return this.countOfPages;
      let centerPage = this.currentPage;
      if (this.currentPage === 1) centerPage++;
      else if (this.currentPage === this.countOfPages) centerPage--;
      return [centerPage - 1, centerPage, centerPage + 1];
    }
  },
  methods: {
    setCurrentPage(pageNumber) {
      this.$emit("setCurrentPage", pageNumber);
    },
    pageIsCurrent(pageNumber) {
      return pageNumber === this.currentPage;
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-control {
  display: block;

  &__button {
    background-color: rgba(70, 10, 20, 0.6);
    color: cornsilk;
    border: none;
    text-decoration: underline;

    &--active {
      background-color: cornsilk;
      color: rgba(70, 10, 20, 0.6);
    }
  }
}
</style>