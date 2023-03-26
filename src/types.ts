export interface Technique {
  id: number;
  [key: string]: unknown;
}

export interface Tactic {
  id: number;
  techniques: Technique[];
  [key: string]: unknown;
}

export interface FlatTechniques {
  [key: string]: Technique;
}

export interface OscarMatrix {
  [key: string]: Tactic;
}
