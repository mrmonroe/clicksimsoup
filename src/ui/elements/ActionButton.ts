import type { State } from "../../core/State.ts";
import type { GameAction } from "../../Types.ts";

export class ActionButton {
  element: HTMLElement;
  isDisabled: boolean;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
    this.isDisabled = false;
  }
  render(action: GameAction, state: State) {
    return `          
    <button id="${action.key}" class="action-card" type="button">
            <span class="action-name">🍎 ${action.name}</span>
            <span class="action-reward">+${action.gatherCount} ${action.name}</span>
            <span class="action-cost">⚡ ${action.energyCost} · ◷ ${action.timeCost}m</span>
          </button>`;
  }
  initEvents(action: GameAction, state: State, clickable: boolean) {
    const button = document.getElementById(action.key);

    if (button) {
      button.addEventListener("click", () => this.handleClick(action, state));
    }
    this.toggleDisabled(action, clickable);
  }
  toggleDisabled(action: GameAction, disabled: boolean) {
    const button = document.getElementById(action.key) as HTMLButtonElement;
    if (button) {
      button.disabled = disabled;
    }
  }

  private handleClick(action: GameAction, state: State) {
    action.execute(state);
    state.isDirty = true;
  }
}
