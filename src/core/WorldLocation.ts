import { Resource } from "./components/Resource.ts";

export interface LocationConfig {
  name: string;
  description: string;
  food: number;
  wood: number;
  stone: number;
}

export class WorldLocation {
  name: string;
  description: string;
  food: Resource;
  wood: Resource;
  stone: Resource;
  cfg: LocationConfig;

  constructor(locationConfig: LocationConfig) {
    this.cfg = locationConfig;
    this.name = this.cfg.name;
    this.description = this.cfg.description;
    this.food = new Resource(this.cfg.food);
    this.wood = new Resource(this.cfg.wood);
    this.stone = new Resource(this.cfg.stone);
  }
}
