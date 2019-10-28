<template>
  <div class="theme-switcher">
    <h4 class="theme-switcher__title">Выбери сторону</h4>
    <div class="theme-switcher__holder">
      <base-button
        class="theme-switcher__btn"
        :class="{'theme-switcher__btn--active': currentTheme === 'dark'}"
        @click="setTheme('dark')"
      >Тёмная</base-button>
      <base-button
        class="theme-switcher__btn"
        :class="{'theme-switcher__btn--active': currentTheme === 'light'}"
        @click="setTheme('light')"
      >Светлая</base-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { theme } from "@/store/modules/store.namespaces.js";
import { SET_APP_THEME } from "@/store/modules/theme/mutation-types.js";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "ThemeSwitcher",
  components: { BaseButton },
  computed: {
    ...mapState(theme, ["currentTheme"])
  },
  methods: {
    ...mapMutations(theme, {
      setTheme: SET_APP_THEME
    })
  }
};
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &__btn {
    &--active {
      text-decoration: underline;
    }
  }
}
</style>