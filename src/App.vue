<template>
  <div class="app" :class="currentTheme">
    <router-view />
    <theme-switcher class="app__switcher" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { people, theme } from "@/store/modules/store.namespaces.js";
import {
  PUSH_TO_PEOPLE_LIST,
  PUSH_TO_SHIPS_LIST
} from "@/store/modules/people/mutation-types";
import dataService from "@/services/dataService";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  name: "App",
  components: { ThemeSwitcher },
  created() {
    dataService.loadPeople(this.pushToPeopleList).then(() => {
      // eslint-disable-next-line no-debugger
      // debugger;
      let ships = this.peopleList
        .map(person => person.starships)
        .reduce((accumulator, current) => accumulator.concat(current));
      dataService.loadShips(this.pushToShipsList, ships);
    });
  },
  computed: {
    ...mapState(people, ["peopleList"]),
    ...mapState(theme, ["currentTheme"])
  },
  methods: {
    ...mapMutations(people, {
      pushToPeopleList: PUSH_TO_PEOPLE_LIST,
      pushToShipsList: PUSH_TO_SHIPS_LIST
    })
  }
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  &__switcher {
    position: absolute;
    right: 20px;
    bottom: 30px;
  }
}
</style>
