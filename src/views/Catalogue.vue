<template>
  <div class="catalogue">
    <h1 class="catalogue__title">Galactic base</h1>
    <pagination-control
      class="catalogue__pagination"
      :itemsCount="peopleCount"
      :itemsPerPage="itemsPerPage"
      :currentPage="currentPage"
      @setCurrentPage="setPage"
    ></pagination-control>
    <div class="catalogue__wrapper">
      <person-card
        class="catalogue__item"
        @click.native="goToPerson(person)"
        mode="short"
        v-for="person in currentPagePeopleList"
        :key="person.id"
        :person="person"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { GET_PEOPLE_COUNT } from "@/store/modules/people/getter-types";
import { SET_CURRENT_PAGE } from "@/store/modules/pagination/mutation-types";
import { people, pagination } from "@/store/modules/store.namespaces.js";
import PersonCard from "@/components/PersonCard.vue";
import PaginationControl from "@/components/PaginationControl.vue";

export default {
  name: "Catalogue",
  components: {
    PersonCard,
    PaginationControl
  },
  computed: {
    ...mapState(people, ["peopleList"]),
    ...mapState(pagination, ["itemsPerPage", "currentPage"]),
    ...mapGetters(people, { peopleCount: GET_PEOPLE_COUNT }),
    currentPagePeopleList() {
      return this.peopleList.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    }
  },
  methods: {
    ...mapMutations(pagination, { setPage: SET_CURRENT_PAGE }),
    goToPerson(person) {
      this.$router.push({ name: "card", params: { name: person.name } });
    }
  }
};
</script>

<style lang="scss" scoped>
.catalogue {
  height: 100%;
  padding: 20px;
  overflow: auto;

  &__pagination {
    margin-top: 30px;
    text-align: center;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
    justify-items: center;
    margin-top: 35px;
  }

  &__title {
    text-align: center;
    text-transform: uppercase;
  }

  &__item {
    cursor: pointer;
  }
}
</style>