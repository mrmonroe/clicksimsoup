export class Time {
  day: number;
  hour: number;
  hoursInDay: number;
  minutes: number;
  constructor() {
    this.day = 0;
    this.hour = 0;
    this.minutes = 0;
    this.hoursInDay = 24;
  }
  tick(timeCost: number) {
    this.minutes += timeCost;
    const remainder = this.minutes - 60;
    if (remainder >= 0) {
      this.hour++;
      this.minutes = remainder;
    }
    if (this.hour >= this.hoursInDay) {
      this.day++;
      this.hour = 0;
      this.minutes = remainder;
    }
  }
  printTime() {
    return `${this.hour}:${String(this.minutes).padStart(2, "0")}`;
  }
}
