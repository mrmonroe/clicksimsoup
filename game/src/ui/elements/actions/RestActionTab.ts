import type { Actions } from "../../../core/actions/Actions.ts";
import type { State } from "../../../core/State.ts";
import { ActionButton } from "./ActionButton.ts";

export class RestActionTab {
  element: HTMLElement;

  sleep: ActionButton;
  rest: ActionButton;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
    this.sleep = new ActionButton(elementId);
    this.rest = new ActionButton(elementId);
  }
  render(actions: Actions, state: State): void {
    this.element.innerHTML = `
    ${this.sleep.render(actions.sleep, state)}
    ${this.rest.render(actions.rest, state)}
    `;

    this.rest.initEvents(actions.rest, state);
    this.sleep.initEvents(actions.sleep, state);
  }
}
