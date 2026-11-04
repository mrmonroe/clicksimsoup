import { Resource } from "./Resource.ts";

export class Inventory {
  wood: Resource;
  stone: Resource;
  gold: Resource;
  food: Resource;

  constructor() {
    this.wood = new Resource(0);
    this.stone = new Resource(0);
    this.gold = new Resource(0);
    this.food = new Resource(0);
  }
}
