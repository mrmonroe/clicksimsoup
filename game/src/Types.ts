import type { GatherAction } from "./core/actions/gather/GatherAction.ts";
import type { RestAction } from "./core/actions/rest/RestAction.ts";
import type { Player } from "./core/entities/Player.ts";
import type { EventLog } from "./core/logging/EventLog.ts";
import type { World } from "./core/world/World.ts";
import type { ResourceKey, WorldLocation } from "./core/world/WorldLocation.ts";
export interface ActionConfig {
  gatherFood: GameAction;
  gatherWood: GameAction;
  mineStone: GameAction;
  rest: GameAction;
  sleep: GameAction;
}

export interface GameAction {
  name: string;
  key: string;
  resourceKey: ResourceKey;
  statKey: StatKey;
  tab: string;
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

export type StatKey = "strength" | "stamina" | "constitution" | "hp" | "energy";
export type ActionRegistry = GatherAction | RestAction;

