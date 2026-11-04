import type { Actions } from "../../../core/actions/Actions.ts";
import type { State } from "../../../core/State.ts";
import { ActionButton } from "./ActionButton.ts";

export class GatherActionTab {
  element: HTMLElement;

  gatherFood: ActionButton;
  gatherWood: ActionButton;
  mineStone: ActionButton;
  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
    this.gatherFood = new ActionButton(elementId);
    this.gatherWood = new ActionButton(elementId);
    this.mineStone = new ActionButton(elementId);
  }
  render(actions: Actions, state: State): void {
    this.element.innerHTML = `
    ${this.gatherFood.render(actions.gatherFood, state)}
    ${this.gatherWood.render(actions.gatherWood, state)}
    ${this.mineStone.render(actions.mineStone, state)}
`;
    this.gatherFood.initEvents(
      actions.gatherFood,
      state,
      !!state.currentLocation.food.value,
    );
    this.gatherWood.initEvents(
      actions.gatherWood,
      state,
      !!!state.currentLocation.wood.value,
    );
    this.mineStone.initEvents(
      actions.mineStone,
      state,
      !!!state.currentLocation.stone.value,
    );
  }
}
