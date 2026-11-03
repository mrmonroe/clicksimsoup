import type { Player } from "../../core/entities/Player.ts";

export class PlayerPanel {
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
    <h2>${player.name}</h2>

          <div class="character-level">Level ${player.level}</div>

          <div class="stat-row">
            <span>Experience</span>
            <span>${player.xp.value} / ${player.xp.max}</span>
          </div>

          <div class="progress">
            <div class="progress-fill experience" style="width: ${player.xp.percentage}%"></div>
          </div>

          <h3>Attributes</h3>

          <div class="stat-row">
            <span>Strength</span>
            <strong>${player.strength.value}</strong>
          </div>

          <div class="stat-row">
            <span>Endurance</span>
            <strong>${player.endurance.value}</strong>
          </div>

          <div class="stat-row">
            <span>Survival</span>
            <strong>${player.survival.value}</strong>
          </div>`;
  }
}
