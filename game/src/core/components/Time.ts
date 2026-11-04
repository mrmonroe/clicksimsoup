export class Time {
  gameTime: Date;

  constructor() {
    // start at 3/1/1900 6:00 am
    this.gameTime = new Date(1900, 1, 3, 6, 0, 0);
  }
  tick(timeCost: number) {
    const mins = this.gameTime.getMinutes();
    this.gameTime.setMinutes(mins + timeCost);
  }

  minutes(minutes: any) {
    throw new Error("Method not implemented.");
  }
}
