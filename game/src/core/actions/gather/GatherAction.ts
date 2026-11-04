import type { GameAction, StatKey } from "../../../Types.ts";
import type { State } from "../../State.ts";
import type { ResourceKey } from "../../world/WorldLocation.ts";

export class GatherAction {
  name: string;
  key: string;
  tab: string;
  resourceKey: ResourceKey;
  statKey: StatKey;
  icon: string;
  timeCost: number;
  energyCost: number;
  gatherCount: number;

  constructor(actionCfg: GameAction) {
    this.name = actionCfg.name;
    this.key = actionCfg.key;
    this.tab = actionCfg.tab;
    this.resourceKey = actionCfg.resourceKey;
    this.statKey = actionCfg.statKey;
    this.icon = actionCfg.icon;
    this.timeCost = actionCfg.timeCost;
    this.energyCost = actionCfg.energyCost;
    this.gatherCount = actionCfg.gatherCount;
  }

  execute(state: State) {
    const amount = state.currentLocation[this.resourceKey];
    amount.decrease(
      this.gatherCount + state.player[this.statKey].modifier.value,
    );
    state.player.inventory[this.resourceKey].increase(amount.value);
    state.world.time.tick(this.timeCost);
    state.player.energy.decrease(
      this.energyCost + state.player.energy.modifier.value,
    );

    state.eventLog.addEntry(
      state.player.name,
      this.tab + "ed",
      this.resourceKey,
      state.currentLocation.name,
      state.world.time,
    );
  }
}
