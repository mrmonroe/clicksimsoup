import { GatherAction } from "./GatherAction.ts";
import { GatherActionsCfg } from "./GatherActionsCfg.ts";

export class Actions {
  gatherFood: GatherAction;
  gatherWood: GatherAction;
  mineStone: GatherAction;
  constructor() {
    this.gatherFood = new GatherAction(GatherActionsCfg.gatherFood);
    this.gatherWood = new GatherAction(GatherActionsCfg.gatherWood);
    this.mineStone = new GatherAction(GatherActionsCfg.mineStone);
  }
}
