import type { EventLog } from "../../core/logging/EventLog.ts";
import type { LogEntry } from "../../core/logging/LogEntry.ts";

export class EventLogPanel {
  element: HTMLElement;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
  }
  entry(logEntry: LogEntry) {
    return `   <div class="event">
            <span class="event-time">${logEntry.formattedRealTime}</span>
            <span>${logEntry.toString()}</span>
          </div>`;
  }
  render(eventLog: EventLog): void {
    const log = eventLog.log;
    let htmlLog = "";
    for (const entry of log) {
      htmlLog += this.entry(entry);
    }
    this.element.innerHTML = htmlLog;
  }
}
