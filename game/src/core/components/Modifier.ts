export class Modifier {
  private _value: number;
  constructor(score: number) {
    this._value = Math.max(0, Math.floor((score - 10) / 2));
  }
  get value() {
    return this._value;
  }
}
