<script setup lang="ts">
import { stateStore } from '../store/stateStore';
import Button from './Button.vue'
</script>

<template>
  <div class="buttons">
    <Button text="-10" @click.native="stateStore.commit('increment', -10)"></Button>
    <Button text="-5" @click.native="stateStore.commit('increment', -5)"></Button>
    <Button text="-1" @click.native="stateStore.commit('increment', -1)"></Button>
    <Button text="+1" @click.native="stateStore.commit('increment', 1)"></Button>
    <Button text="+5" @click.native="stateStore.commit('increment', 5)"></Button>
    <Button text="+10" @click.native="stateStore.commit('increment', 10)"></Button>
  </div>
</template>

<style scoped>
.buttons {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
</style>