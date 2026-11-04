import type { GameAction } from "../../../Types.ts";

export const RestActionsCfg = {
  rest: {
    name: "Rest",
    key: "rest",
    tab: "rest",
    statKey: "hp",
    resourceKey: "food",
    icon: "😴",
    timeCost: 60 * 2,
    energyCost: 5,
    gatherCount: 0,
  },
  sleep: {
    name: "Sleep",
    key: "sleep",
    statKey: "hp",
    tab: "rest",
    resourceKey: "food",
    icon: "🛌",
    timeCost: 60 * 8,
    energyCost: 0,
    gatherCount: 0,
  },
} satisfies Record<string, GameAction>;
