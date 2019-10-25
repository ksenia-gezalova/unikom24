<template>
  <div class="card">
    <base-button @click="goBack">
      <i class="card__icon fas fa-arrow-left"></i>Назад
    </base-button>
    <person-card class="catalogue__item" mode="full" :person="person" />
  </div>
</template>

<script>
import PersonCard from "@/components/PersonCard.vue";
import { mapState } from "vuex";
import { people } from "@/store/modules/store.namespaces.js";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "Card",
  components: { BaseButton, PersonCard },
  computed: {
    ...mapState(people, ["peopleList"]),
    personName() {
      return this.$route.params.name;
    },
    person() {
      return this.peopleList.find(person => person.name === this.personName);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;

  &__icon {
    margin-right: 5px;
  }
}
</style>