import type { GameAction, StatKey } from "../../../Types.ts";

import type { State } from "../../State.ts";
import type { ResourceKey } from "../../world/WorldLocation.ts";

export class RestAction {
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
    console.log('');
    if (this.key == "rest") this._rest(state);
    if (this.key == "sleep") this._sleep(state);
    state.world.time.tick(this.timeCost);
    state.eventLog.addEntry(
      state.player.name,
      this.tab + "ed",
      this.resourceKey,
      state.currentLocation.name,
      state.world.time,
    );
  }
  private _rest(state: State) {
    state.player.energy.setValueToMax();
    state.player.hp.increase(this.gatherCount);
  }
  private _sleep(state: State) {
    state.player.energy.setValueToMax();
    state.player.hp.setValueToMax();
  }
}
