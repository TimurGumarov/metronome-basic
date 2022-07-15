<script setup lang="ts">
interface Props {
  bpm: Number;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="screen">
    <span>{{props.bpm}}</span>
  </div>
</template>

<style scoped>
  .screen {
    padding: 20px;
    width: 100%;
    border: 1px solid rgb(49, 87, 106);
    color: rgb(49, 87, 106);
    border-radius: 4px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .screen span {
    font-weight: bold;
    font-size: 2em;
  }
</style>
