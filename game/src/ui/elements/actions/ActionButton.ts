import type { State } from "../../../core/State.ts";
import type { ActionRegistry } from "../../../Types.ts";

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
  render(action: ActionRegistry, state: State) {
    return `          
    <button id="${action.key}" class="action-card" type="button">
            <span class="action-name">${action.icon} ${action.name}</span>
            <span class="action-reward">+${action.gatherCount} ${action.resourceKey}</span>
            <span class="action-cost">⚡ ${action.energyCost} · ◷ ${action.timeCost}m</span>
          </button>`;
  }
  initEvents(action: ActionRegistry, state: State, clickable: boolean = true) {
    const button = document.getElementById(action.key);

    if (button) {
      button.addEventListener("click", () => this.handleClick(action, state));
    }
    if (!clickable) {
      this.toggleDisabled(action, clickable);
    }
  }
  toggleDisabled(action: ActionRegistry, disabled: boolean) {
    const button = document.getElementById(action.key) as HTMLButtonElement;
    if (button) {
      button.disabled = disabled;
    }
  }

  private handleClick(action: ActionRegistry, state: State) {
    action.execute(state);
    state.isDirty = true;
  }
}
