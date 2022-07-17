import { OscSound, OscWaveforms } from "../types/audioEngineTypes";

export class AudioEngine {
  public ctx: AudioContext = new window.AudioContext();
  public osc: OscillatorNode = this.ctx.createOscillator();
  public gain: GainNode = this.ctx.createGain();

  constructor() {
    this.osc.connect(this.gain);
    this.gain.connect(this.ctx.destination);

    this.osc.start(0);
    this.gain.gain.value = 0;
  }

  /** Resumes WebAudio context. */
  public resume() {
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  /** Lowers gain to 0 and suspend the WebAudio context. */
  public stop() {
    this.ctx.suspend();
    this.gain.gain.value = 0;
  }

  /** Changes Oscillator type. */
  public changeOscType(oscType: OscWaveforms) {
    this.osc.type = oscType;
  }

  /** Changes frequeency of Oscillator. */
  public changeFreq(freq: number) {
    this.osc.frequency.value = freq;
  }

  /** Loads Oscillator properties with OscSound type. */
  public loadOscSound(oscSound: OscSound) {
    this.changeOscType(oscSound.type);
    this.changeFreq(oscSound.freq.basic);
  }
}