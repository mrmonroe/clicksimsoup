import type { ActionCfg } from "./GatherAction.ts";

export const GatherActionsCfg = {
  gatherWood: {
    name: "Gather Wood",
    key: "gatherWood",
    tab: "gather",
    statKey: "strength",
    resourceKey: "wood",
    icon: "🪓",
    timeCost: 30,
    energyCost: 5,
    gatherCount: 3,
  },
  mineStone: {
    name: "Mine Stone",
    key: "mineStone",
    statKey: "strength",
    tab: "gather",
    resourceKey: "stone",
    icon: "⛏",
    timeCost: 60,
    energyCost: 10,
    gatherCount: 2,
  },
  gatherFood: {
    name: "Gather Food",
    key: "gatherFood",
    statKey: "strength",
    tab: "gather",
    resourceKey: "food",
    icon: "🍎",
    timeCost: 15,
    energyCost: 3,
    gatherCount: 1,
  },
} satisfies Record<string, ActionCfg>;
