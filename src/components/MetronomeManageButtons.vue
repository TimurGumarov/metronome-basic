<script setup lang="ts">
import Button from './Button.vue'

defineEmits(['metronomeStart', 'metronomeStop', 'metronomeSingleClick']);
</script>

<template>
  <div class="buttons">
    <Button text="start" @click.native="$emit('metronomeStart')"></Button>
    <Button text="stop" @click.native="$emit('metronomeStop')"></Button>
    <Button text="click" @click.native="$emit('metronomeSingleClick')"></Button>
  </div>
</template>

<style scoped>
.buttons {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>