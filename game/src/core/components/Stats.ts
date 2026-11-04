import { Modifier } from "./Modifier.ts";
import { Resource } from "./Resource.ts";

export class Stats extends Resource {
  private _max: number;
  constructor(initialValue: number = 0, _max: number) {
    super(initialValue);

    this._max = _max;
  }
  setValueToMax() {
    const amount = this._max - super.value;
    super.increase(amount);
  }
  get max() {
    return this._max;
  }

  get percentage() {
    return Math.round((super.value / this._max) * 100);
  }
  get modifier() {
    return new Modifier(super.value);
  }
}
