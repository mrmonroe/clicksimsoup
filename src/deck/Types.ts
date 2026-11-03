export interface CardDefinition {
  name: string;
  type: string;
  effectValue: number;
  cost: number;
}
export type CardRegistry = Record<string, CardDefinition>;
