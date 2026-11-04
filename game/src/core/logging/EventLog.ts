import type { Time } from "../components/Time.ts";
import { LogEntry } from "./LogEntry.ts";

export class EventLog {
  private _log: LogEntry[];
  constructor() {
    this._log = [];
  }
  get log() {
    return this._log.toReversed();
  }
  addEntry(
    who: string,
    action: string,
    what: string,
    where: string,
    gameTime: Time,
  ) {
    const entry = new LogEntry(who, action, what, where, gameTime);
    this._log.push(entry);
  }
}
