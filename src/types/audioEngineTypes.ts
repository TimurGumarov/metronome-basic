export enum OscWaveforms {
  SINE = 'sine',
  SQUARE = 'square',
}

export interface OscSound {
  type: OscWaveforms
  freq: {
    basic: number
    accent: number
    accent2: number
  },
}