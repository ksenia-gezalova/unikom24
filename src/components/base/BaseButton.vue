<template>
  <button v-on="$listeners" class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>

<style lang="scss" scoped>
.base-button {
  color: inherit;
  background-color: inherit;
  border: none;
}
</style>