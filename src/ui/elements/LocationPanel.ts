import type { Time } from "../../core/components/Time.ts";
import type { WorldLocation } from "../../core/WorldLocation.ts";

export class LocationPanel {
  element: HTMLElement;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
  }
  render(currentLocation: WorldLocation): void {
    this.element.innerHTML = ` <h2>${currentLocation.name}</h2>

          <p class="description">${currentLocation.description} </p>

          <h3>Available Resources</h3>

          <div class="stat-row">
            <span>🍎 Food</span>
            <strong>${currentLocation.food.value}</strong>
          </div>

          <div class="stat-row">
            <span>🪵 Wood</span>
            <strong>${currentLocation.wood.value}</strong>
          </div>

          <div class="stat-row">
            <span>🪨 Stone</span>
            <strong>${currentLocation.stone.value}</strong>
          </div>`;
  }
}
