<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import { stateStore } from "./store/stateStore"

import Screen from './components/Screen.vue'
import BpmManageButtons from './components/BpmManageButtons.vue';
import MetronomeManageButtons from "./components/MetronomeManageButtons.vue";

import { Metronome } from "./utils/metronome-engine";
import { MetronomeSounds } from "./types/metronomeEngineTypes";

stateStore.commit('set', 140);

let metronome = new Metronome({
  sound: MetronomeSounds.CLICK_ONE,
  bpm: stateStore.state.bpm
})

const unsubscribe = stateStore.subscribe((_, state) => {
  metronome.setTempo(state.bpm)
})

onBeforeUnmount(()=>{
  unsubscribe();
});
</script>

<template>
  <div class="wrapper">
    <Screen v-bind:bpm="stateStore.state.bpm" />
    <BpmManageButtons />
    <MetronomeManageButtons
      @metronome-start="metronome.start()"
      @metronome-stop="metronome.stop()"
      @metronome-single-click="metronome.basicCLick()"
    />
  </div>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: clamp(200px, 100%, 600px);
  box-sizing: border-box;
}
</style>
