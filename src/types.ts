export interface FlatTechniques {
  [key: string]: Technique;
}

export type Technique = any;
export type Tactic = any;

export interface OscarMatrix {
  [key: string]: Tactic;
}
