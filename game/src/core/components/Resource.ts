// 1. Define a class to manage individual resource behavior
export class Resource {
  private _value: number = 0;

  constructor(initialValue: number = 0) {
    this._value = initialValue;
  }

  // Allows reading the value directly (e.g., inventory.wood.value)
  get value(): number {
    return this._value;
  }

  // Automatically converts to a number when used in math or templates
  valueOf(): number {
    return this._value;
  }

  increase(amount: number): void {
    if (amount > 0) {
      this._value += amount;
    }
  }

  decrease(amount: number): number {
    if (amount > 0 && amount > this._value) {
      const change = this._value;
      this._value = 0;
      return change;
    } else {
      this._value -= amount;
      return amount;
    }
  }
}
