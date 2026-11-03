import type { GameUI } from "../ui/GameUI.ts";
import type { Player } from "./entities/Player.ts";
import type { ActionConfig } from "../Types.ts";
import type { World } from "./World.ts";
import type { WorldLocation } from "./WorldLocation.ts";

export class State {
  player: Player;
  world: World;
  currentLocation: WorldLocation;
  private _actions: ActionConfig;
  private _ui: GameUI;
  private _isDirty: boolean;

  constructor(
    player: Player,
    world: World,
    currentLocation: WorldLocation,
    actions: ActionConfig,
    ui: GameUI,
  ) {
    this.player = player;
    this.world = world;
    this.currentLocation = currentLocation;

    this._actions = actions;
    this._ui = ui;
    this._isDirty = false;
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
  }
}
