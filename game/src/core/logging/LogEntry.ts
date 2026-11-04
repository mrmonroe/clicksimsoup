import type { Time } from "../components/Time.ts";

export class LogEntry {
  who: string;
  action: string;
  what: string;
  where: string;
  gameTime: Time;
  realTime: Date;
  private _formatter: Intl.DateTimeFormat;
  constructor(
    who: string,
    action: string,
    what: string,
    where: string,
    gameTime: Time,
  ) {
    this.who = who;
    this.action = action;
    this.what = what;
    this.where = where;
    this.gameTime = gameTime;
    this.realTime = new Date();
    this._formatter = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Forces 24-hour format
    });
  }
  get formattedRealTime() {
    return this._formatter.format(this.realTime);
  }
  toString() {
    return `${this.who} ${this.action} ${this.what} in the ${this.where} on Day: ${this.gameTime.day} at ${this.gameTime.hour}:${this.gameTime.minutes} `;
  }
}
