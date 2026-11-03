import { Player } from "./entities/Player.ts";
import { World } from "./World.ts";
import { ActionCfg } from "./ActionCfg.ts";
import type { ActionConfig } from "../Types.ts";
import type { WorldLocation } from "./WorldLocation.ts";
import { GameUI } from "../ui/GameUI.ts";
import { State } from "./State.ts";


export class Game {
  state: State;
  player: Player;
  world: World;
  currentLocation: WorldLocation;
  gameUI: GameUI;
  cfg: any;
  actions: ActionConfig;

  constructor() {
    this.player = new Player("dude");
    this.world = new World();
    this.currentLocation = this.world.locations[0];
    this.actions = ActionCfg;
    this.gameUI = new GameUI();

    this.state = new State(
      this.player,
      this.world,
      this.currentLocation,
      this.actions,
      this.gameUI,
    );
  }
  init() {
    this.gameUI.render(this.state, this.actions);
  }
  dump() {
    console.log(this);
  }
}
