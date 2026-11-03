import type { ActionCfg } from "./core/actions/GatherActionsCfg.ts";
import type { Player } from "./core/entities/Player.ts";
import type { EventLog } from "./core/logging/EventLog.ts";
import type { State } from "./core/State.ts";
import type { World } from "./core/world/World.ts";
import type { WorldLocation } from "./core/world/WorldLocation.ts";

export interface ActionConfig {
  gatherFood: GameAction;
  gatherWood: GameAction;
  mineStone: GameAction;
}

export interface GameAction {
  name: string;
  key: string;
  tab: string;
  resourceKey: string;
  icon: string;
  timeCost: number;
  energyCost: number;
  gatherCount: number;
}

export interface GameState {
  player: Player;
  world: World;
  currentLocation: WorldLocation;
  eventLog: EventLog;
  actions: ActionConfig;
  isDirty: Boolean;
}

export type ActionName = keyof typeof ActionCfg;
