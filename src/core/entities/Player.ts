import { Inventory } from "../components/Inventory.ts";
import { Stats } from "../components/Stats.ts";
import { Entity } from "./Entity.ts";

export class Player extends Entity {
  inventory: Inventory;
  hp: Stats;
  energy: Stats;
  level: number;
  xp: Stats;
  strength: Stats;
  endurance: Stats;
  survival: Stats;
  constructor(name: string) {
    super(name);
    this.level = 1;
    this.xp = new Stats(0, 100);
    this.hp = new Stats(100, 100);
    this.energy = new Stats(100, 100);
    this.strength = new Stats(5, 100);
    this.endurance = new Stats(5, 100);
    this.survival = new Stats(5, 100);
    this.inventory = new Inventory();
  }
}
