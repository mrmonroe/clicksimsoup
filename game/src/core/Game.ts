import { Player } from "./entities/Player.ts";
import { World } from "./world/World.ts";
import type { WorldLocation } from "./world/WorldLocation.ts";
import { GameUI } from "../ui/GameUI.ts";
import { State } from "./State.ts";
import { EventLog } from "./logging/EventLog.ts";
import { Actions } from "./actions/Actions.ts";

export class Game {
  state: State;
  player: Player;
  world: World;
  currentLocation: WorldLocation;
  eventLog: EventLog;
  gameUI: GameUI;
  cfg: any;
  actions: Actions;

  constructor() {
    this.player = new Player("dude");
    this.world = new World();
    this.currentLocation = this.world.locations[0];
    this.eventLog = new EventLog();
    this.actions = new Actions();
    this.gameUI = new GameUI();

    this.state = new State(
      this.player,
      this.world,
      this.currentLocation,
      this.eventLog,
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
