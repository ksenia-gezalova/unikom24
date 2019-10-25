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
      <div>{{ person.starships }}</div>
    </div>
  </div>
</template>

<script>
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
    isShort() {
      return this.mode === "short";
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
  &--short {
    &:hover {
      .person-card__img {
        transform: translateY(-10px);
        box-shadow: 0 0 10px rgba(241, 3, 3, 0.658);
      }
    }
  }
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 14px;

  &__img {
    position: relative;
    flex-shrink: 0;
    height: 200px;
    width: 200px;
    margin-right: 10px;
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
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>