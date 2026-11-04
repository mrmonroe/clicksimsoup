import type { WorldLocation } from "../../core/world/WorldLocation.ts";
import type { Player } from "../../core/entities/Player.ts";

export class StatusBar {
  element: HTMLElement;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
  }
  render(player: Player, currentLocation: WorldLocation): void {
    this.element.innerHTML = `<div class="status">
          <div class="status-label">
            <span>♥ Health</span>
            <span>${player.hp.value} / ${player.hp.max}</span>
          </div>

          <div class="progress">
            <div class="progress-fill health" style="width: ${player.hp.percentage}%"></div>
          </div>
        </div>

        <div class="status">
          <div class="status-label">
            <span>⚡ Energy</span>
            <span>${player.energy.value} / ${player.energy.max}</span>
          </div>

          <div class="progress">
            <div class="progress-fill energy" style="width: ${player.energy.percentage}%"></div>
          </div>
        </div>

        <div class="current-location">
          <span class="label">Current Location</span>
          <strong>${currentLocation.name}</strong>
        </div>`;
  }
}
