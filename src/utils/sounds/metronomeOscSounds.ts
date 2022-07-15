import { OscSound, OscWaveforms } from "../../types/audioEngineTypes";

export let clickSoundOne: OscSound = {
  type: OscWaveforms.SINE,
  freq: {
    basic: 1000,
    accent: 1600,
    accent2: 1300
  },
}

export let clickSoundTwo: OscSound = {
  type: OscWaveforms.SQUARE,
  freq: {
    basic: 1000,
    accent: 1600,
    accent2: 1300
  },
}