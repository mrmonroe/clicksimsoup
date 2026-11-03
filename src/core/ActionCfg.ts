import type { GameAction } from "../Types.ts";
import type { State } from "./State.ts";

export const ActionCfg = {
  gatherWood: {
    name: "Gather Wood",
    key: "gatherWood",
    resourceKey: "wood",
    icon: "🪓",
    timeCost: 30,
    energyCost: 2,
    gatherCount: 3,
    execute(state: State) {
      const amount = state.currentLocation.wood.decrease(this.gatherCount);
      state.player.inventory.wood.increase(amount);
      state.world.time.tick(this.timeCost);
      state.player.energy.decrease(this.energyCost);
    },
  },
  mineStone: {
    name: "Mine Stone",
    key: "mineStone",
    resourceKey: "stone",
    icon: "⛏",
    timeCost: 60,
    energyCost: 3,
    gatherCount: 2,
    execute(state: State) {
      const amount = state.currentLocation.stone.decrease(this.gatherCount);
      state.player.inventory.stone.increase(amount);
      state.world.time.tick(this.timeCost);
      state.player.energy.decrease(this.energyCost);
    },
  },
  gatherFood: {
    name: "Gather Food",
    key: "gatherFood",
    resourceKey: "food",
    icon: "🍎",
    timeCost: 15,
    energyCost: 1,
    gatherCount: 1,
    execute(state: State) {
      const amount = state.currentLocation.food.decrease(this.gatherCount);
      state.player.inventory.food.increase(amount);
      state.world.time.tick(this.timeCost);
      state.player.energy.decrease(this.energyCost);
    },
  },
} satisfies Record<string, GameAction>;
