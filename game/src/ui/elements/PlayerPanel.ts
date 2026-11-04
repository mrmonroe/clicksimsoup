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
            <span>Str</span>
           <strong>${player.strength.value}</strong>
            <span>+${player.strength.modifier.value}</span>
            
          </div>

          <div class="stat-row">
            <span>Sta</span>
            <strong>${player.stamina.value}</strong>
            <span>+${player.stamina.modifier.value}</span>
          </div>

          <div class="stat-row">
            <span>Con</span>
            <strong>${player.constitution.value}</strong>
            <span>+${player.constitution.modifier.value}</span>
          </div>`;
  }
}
