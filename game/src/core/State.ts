import type { GameUI } from "../ui/GameUI.ts";
import type { Player } from "./entities/Player.ts";
import type { ActionConfig } from "../Types.ts";
import type { World } from "./world/World.ts";
import type { WorldLocation } from "./world/WorldLocation.ts";
import type { EventLog } from "./logging/EventLog.ts";
import type { Actions } from "./actions/Actions.ts";
import { AutoKill } from "./actions/AutoKill.ts";

export class State {
  player: Player;
  world: World;
  currentLocation: WorldLocation;
  eventLog: EventLog;
  private _actions: Actions;
  private _ui: GameUI;
  private _isDirty: boolean;
  gameOver: boolean;
  isHealthAutoReducing: boolean;
  autoKill: AutoKill;

  constructor(
    player: Player,
    world: World,
    currentLocation: WorldLocation,
    eventLog: EventLog,
    actions: Actions,
    ui: GameUI,
  ) {
    this.player = player;
    this.world = world;
    this.currentLocation = currentLocation;
    this.eventLog = eventLog;

    this._actions = actions;
    this._ui = ui;
    this._isDirty = false;
    this.autoKill = new AutoKill();

    this.isHealthAutoReducing = false;
    this.gameOver = false;
  }
  public get isDirty(): Boolean {
    return this._isDirty;
  }
  public set isDirty(toggle: boolean) {
    this._isDirty = toggle;
    if (this._isDirty) {
      this.onStateChange();
    }
  }
  private onStateChange() {
    this._ui.render(this, this._actions);
    if (this.player.hp.value == 0) {
      this.isHealthAutoReducing = false;
      this._ui.render(this, this._actions);
      alert("you've died");
      return false;
    }
    if (this.player.energy.value == 0) {
      this.isHealthAutoReducing = true;
      this.autoKill.tick(this);
    }
    if (
      this.player.hp.value > 0 &&
      this.player.energy.value > 0 &&
      this.isHealthAutoReducing
    ) {
      this.isHealthAutoReducing = false;
    }
  }
}
