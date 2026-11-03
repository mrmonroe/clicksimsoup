import type { CardRegistry } from "../Types.ts";

export const CombatCards = {
  strike: {
    name: "Strike",
    type: "attack",
    effectValue: 6,
    cost: 1,
  },
  defend: {
    name: "Defend",
    type: "defense",
    effectValue: 5,
    cost: 1,
  },
} satisfies CardRegistry;
