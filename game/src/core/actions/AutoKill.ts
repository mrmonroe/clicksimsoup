import type { State } from "../State.ts";

export class AutoKill {
  intervalID: number;
  constructor() {
    this.intervalID = 0;
  }
  start(state: State, delay: number) {
    state.isHealthAutoReducing = true;
    this.intervalID = setInterval(() => {
      this.tick(state);
      state.isDirty = true;
    }, delay);
  }
  tick(state: State, amount: number = 10) {
    state.player.hp.decrease(amount);
  }
  stop(state: State) {
    clearInterval(this.intervalID);
    state.isHealthAutoReducing = true;
  }
}
