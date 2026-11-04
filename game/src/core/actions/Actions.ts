import { GatherAction } from "./gather/GatherAction.ts";
import { GatherActionsCfg } from "./gather/GatherActionsCfg.ts";
import { RestAction } from "./rest/RestAction.ts";
import { RestActionsCfg } from "./rest/RestActionsCfg.ts";

export class Actions {
  gatherFood: GatherAction;
  gatherWood: GatherAction;
  mineStone: GatherAction;
  rest: RestAction;
  sleep: RestAction;
  constructor() {
    this.gatherFood = new GatherAction(GatherActionsCfg.gatherFood);
    this.gatherWood = new GatherAction(GatherActionsCfg.gatherWood);
    this.mineStone = new GatherAction(GatherActionsCfg.mineStone);
    this.rest = new RestAction(RestActionsCfg.rest);
    this.sleep = new RestAction(RestActionsCfg.sleep);
  }
}
