import { Time } from "./components/Time.ts";
import { WorldLocation, type LocationConfig } from "./WorldLocation.ts";

export class World {
  time: Time;
  locations: WorldLocation[];
  constructor() {
    this.time = new Time();
    this.locations = [];

    const firstLocation: LocationConfig = {
      name: "Jiggle Me Timbers",
      description: "A funny little forest with kookie things going on.",
      food: 5,
      wood: 10,
      stone: 3,
    };
    this.locations.push(new WorldLocation(firstLocation));
  }
}
