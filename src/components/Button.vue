<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <button>{{ text }}</button>
  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
</template>

<style scoped>
button {
  font-size: 1.3em;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #fffbd5;
  background: -webkit-linear-gradient(to bottom, #bbd2c5, #536976, #292e49);
  background: linear-gradient(to bottom, #bbd2c5, #536976, #292e49);
  background-size: 100% 270%;
  background-position: top;
  color: white;
  transition: background-position 0.1s ease-in-out;
  cursor: pointer;
}
button:hover {
  background-position: bottom;
}
button:active {
  background: #292e49;
}
</style>
