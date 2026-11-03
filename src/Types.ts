import type { ActionCfg } from "./core/ActionCfg.ts";
import type { Player } from "./core/entities/Player.ts";
import type { State } from "./core/State.ts";
import type { World } from "./core/World.ts";
import type { WorldLocation } from "./core/WorldLocation.ts";

export interface ActionConfig {
  gatherFood: GameAction;
  gatherWood: GameAction;
  mineStone: GameAction;
}

export interface GameAction {
  name: string;
  key: string;
  resourceKey: string;
  icon: string;
  timeCost: number;
  energyCost: number;
  gatherCount: number;

  execute(state: State): void;
}

export interface GameState {
  player: Player;
  world: World;
  currentLocation: WorldLocation;
  actions: ActionConfig;
  isDirty: Boolean;
}

export type ActionName = keyof typeof ActionCfg;
