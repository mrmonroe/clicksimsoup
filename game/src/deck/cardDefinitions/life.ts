import type { CardRegistry } from "../Types.ts";

export const LifeCards = {
  farm: {
    name: "Farm",
    type: "farm",
    effectValue: 2,
    cost: 1,
  },
  chop: {
    name: "Chop Wood",
    type: "forestry",
    effectValue: 3,
    cost: 2,
  },
} satisfies CardRegistry;
