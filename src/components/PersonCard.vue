<template>
  <div :class="{'person-card': true, 'person-card--short': isShort}">
    <div class="person-card__img">
      <img :src="`https://robohash.org/${person.name}.png`" />
      <div class="person-card__info">
        Имя: {{person.name}}
        <br />
        Дата создания: {{dateString(person.created)}}
      </div>
    </div>
    <div v-if="!isShort" class="person-card__full">
      Год рождения: {{ person.birth_year}}
      Пол: {{ person.gender }}
      <div class="person-card__starships" v-if="starships.length > 0">
        Корабли:
        <ul class="person-card__list">
          <li class="person-card__item" v-for="ship in starships" :key="ship.url">
            модель: {{ ship.model }},
            имя: {{ ship.name }},
          </li>
        </ul>
      </div>
      <div class="person-card__starships" v-else>Кораблей у персонажа нет</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { people } from "@/store/modules/store.namespaces.js";

export default {
  name: "PersonCard",
  props: {
    person: {
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: "full"
    }
  },
  computed: {
    ...mapState(people, ["shipsList"]),
    isShort() {
      return this.mode === "short";
    },
    starships() {
      return this.shipsList.filter(ship =>
        this.person.starships.includes(ship.url)
      );
    }
  },
  methods: {
    dateString(dateString) {
      const date = new Date(dateString);
      return `${("0" + date.getDate()).slice(-2)}.${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}.${date.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.person-card {
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 14px;

  &__img {
    position: relative;
    flex-shrink: 0;
    height: 200px;
    width: 200px;
    margin: 0 auto;
    border: 1px solid inherit;
    overflow: hidden;
    transition: all 0.3s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  &__starships {
    margin-top: 20px;
  }
}
</style>