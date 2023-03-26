export interface Technique {
  id: number;
  name: string;
  description: string;
  tacticId: number;
}

export interface Tactic {
  id: number;
  name: string;
  description: string;
  techniques: Technique[];
}

export interface FlatTechniques {
  [key: string]: Technique;
}

export type OscarMatrix = Tactic[];