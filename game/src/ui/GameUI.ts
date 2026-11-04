import type { ActionConfig } from "../Types.ts";
import type { State } from "../core/State.ts";
import { EventLogPanel } from "./elements/EventLogPanel.ts";
import { GatherActionTab } from "./elements/actions/GatherActionTab.ts";
import { Header } from "./elements/Header.ts";
import { InventoryPanel } from "./elements/InventoryPanel.ts";
import { LocationPanel } from "./elements/LocationPanel.ts";
import { PlayerPanel } from "./elements/PlayerPanel.ts";
import { StatusBar } from "./elements/StatusBar.ts";
import { RestActionTab } from "./elements/actions/RestActionTab.ts";
import type { Actions } from "../core/actions/Actions.ts";

export class GameUI {
  header: Header;
  statusBar: StatusBar;
  playerPanel: PlayerPanel;
  locationPanel: LocationPanel;
  inventoryPanel: InventoryPanel;
  gatherActionTab: GatherActionTab;
  eventLogPanel: EventLogPanel;
  restActionTab: RestActionTab;
  constructor() {
    this.header = new Header("game-header");
    this.statusBar = new StatusBar("status-bar");
    this.playerPanel = new PlayerPanel("player-panel");
    this.locationPanel = new LocationPanel("location-panel");
    this.inventoryPanel = new InventoryPanel("inventory-panel");

    this.gatherActionTab = new GatherActionTab("gather-action-tab");
    this.restActionTab = new RestActionTab("rest-action-tab");

    this.eventLogPanel = new EventLogPanel("event-log");
  }
  render(state: State, actions: Actions) {
    // Stats
    this.header.render(state.world.time);
    this.statusBar.render(state.player, state.currentLocation);
    this.playerPanel.render(state.player);
    this.locationPanel.render(state.currentLocation);
    this.inventoryPanel.render(state.player);
    this.eventLogPanel.render(state.eventLog);

    //Actions
    this.gatherActionTab.render(actions, state);
    this.restActionTab.render(actions, state);
  }
}
