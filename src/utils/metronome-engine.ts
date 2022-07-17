import { MetronomeSounds } from "../types/metronomeEngineTypes";
import { OscSound } from "../types/audioEngineTypes";
import { clickSoundOne, clickSoundTwo } from "./sounds/metronomeOscSounds";

import { AudioEngine } from "./audio-engine";

interface metronomeProps {
  sound: MetronomeSounds
  bpm: number
}

class Metronome {
  private audioEngine: AudioEngine = new AudioEngine();

  private tempo: number = 100;
  private playing: boolean = false;
  private loopInterval: number = 0;

  constructor(props: metronomeProps) {
    this.changeSound(props.sound);
    this.setTempo(props.bpm);
  }

  /** Sound selector from MetronomeSounds enum. */
  private chooseSound (name: MetronomeSounds) : OscSound {
    switch (name) {
      case MetronomeSounds.CLICK_ONE:
        return clickSoundOne;
      case MetronomeSounds.CLICK_TWO:
        return clickSoundTwo;
    }
    throw new Error("Shouldn't be reachable");
  }

  /** Changes sound of metronome by MetronomeSounds enum. */
  public changeSound (sound: MetronomeSounds) {
    this.audioEngine.loadOscSound(this.chooseSound(sound));
  }

  /** Makes one click with basic sound. */
  public basicCLick() {
    this.audioEngine.resume();
    const time = this.audioEngine.ctx.currentTime;
    this.tickWithTime(time);
  }

  private tickWithTime(time: number) {
    this.audioEngine.gain.gain.cancelScheduledValues(time);
    this.audioEngine.gain.gain.setValueAtTime(0, time);
    this.audioEngine.gain.gain.linearRampToValueAtTime(1, time + .001);
    this.audioEngine.gain.gain.linearRampToValueAtTime(0, time + .001 + .01);
  }

  /** Sets tempo for metronome loop. */
  public setTempo(bpm: number) {
    this.tempo = bpm;
  }

  /** Start the metronome loop. */
  public start() {
    if (this.playing) return;
    this.playing = true;
    this.audioEngine.resume();
    this.startMetronomeLoop();
    console.log("Start");
  }

  /** Stops the metronome loop. */
  public stop() {
    if (!this.playing) return;
    this.playing = false;
    this.audioEngine.stop();
    if (this.loopInterval) clearInterval(this.loopInterval);
    console.log("Stop");
  }

  /** Metronome loop. */
  private startMetronomeLoop() {
    let counter = 0;
    let lastTime = new Date().getTime();
    this.loopInterval = window.setInterval(() => {
      const timeoutDuration = (60 / this.tempo) * 1000;
      let newTime = new Date().getTime();
      if (this.playing && newTime - lastTime >= timeoutDuration) {
        console.log(newTime - lastTime);
        lastTime = newTime;
        this.basicCLick();
      }
    }, 2);
  }
}

export { Metronome };