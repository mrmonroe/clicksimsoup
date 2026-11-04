import type { Player } from "../../core/entities/Player.ts";

export class InventoryPanel {
  element: HTMLElement;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
  }
  render(player: Player): void {
    this.element.innerHTML = `       
     <h2>Inventory</h2>

          <div class="stat-row">
            <span>Food</span>
            <strong>${player.inventory.food.value}</strong>
          </div>

          <div class="stat-row">
            <span>Wood</span>
            <strong>${player.inventory.wood.value}</strong>
          </div>

          <div class="stat-row">
            <span>Stone</span>
            <strong>${player.inventory.stone.value}</strong>
          </div>

          <h3>Equipment (TODO)</h3>

          <div class="stat-row">
            <span>Axe</span>
            <strong>1</strong>
          </div>

          <div class="stat-row">
            <span>Pickaxe</span>
            <strong>1</strong>
          </div>`;
  }
}
