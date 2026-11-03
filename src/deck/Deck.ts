import { CombatCards } from "./cardDefinitions/combat.ts";
import { LifeCards } from "./cardDefinitions/life.ts";
import type { CardDefinition, CardRegistry } from "./Types.ts";
export let Deck: CardDefinition[] = [];

export function createDeck() {
  for (let i = 0; i < 4; i++) {
    Deck.push(CombatCards.defend);
    Deck.push(CombatCards.strike);
    Deck.push(LifeCards.chop);
    Deck.push(LifeCards.farm);
  }
  console.log(Deck);
}
