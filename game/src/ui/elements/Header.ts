import type { Time } from "../../core/components/Time.ts";

export class Header {
  element: HTMLElement;

  constructor(elementId: string) {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element ${elementId} not found`);
    }

    this.element = element;
  }
  render(time: Time): void {
    this.element.innerHTML = `
           <h1>CARDEL</h1>

        <div class="game-clock">
          <span>${time.gameTime.toString()}</span>
          
        </div>

        <button class="settings-button" aria-label="Settings">⚙</button>
        
        `;
  }
}
