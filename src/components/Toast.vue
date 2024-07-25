<!-- Toast.vue -->
<template>
  <div v-if="visible" class="toast">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    visible: Boolean
  }
}
</script>

<style scoped>
.toast {
  width: fit-content;
  height: auto;
  padding: 10px;
  text-transform: capitalize;
  position: absolute;
  top: 5%;
  right: 45%;
  background-color: var(--black);
  color: var(--white);
  border-radius: 8px;
  font-size: 16px;
}
</style>
