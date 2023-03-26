import fs from "fs";
import { FlatTechniques, OscarMatrix, Tactic, Technique } from "./types";

let oscarMatrix: OscarMatrix = {};
let flatTechniques: FlatTechniques = {};

const getOscarMatrix = (): OscarMatrix => {
  if (Object.keys(oscarMatrix).length === 0) {
    const data = fs.readFileSync(`${__dirname}/pbom_data/matrix.json`, "utf8");
    oscarMatrix = JSON.parse(data);
  }

  return Object.assign({}, oscarMatrix);
};

export const getFlatTechniques = (): FlatTechniques => {
  if (Object.keys(flatTechniques).length === 0) {
    const matrix = getOscarMatrix();
    flatTechniques = Object.keys(matrix).reduce(
      (flatTechnique: FlatTechniques, tacticId: string) => {
        const tactic: Tactic = matrix[tacticId];

        tactic.techniques.forEach((technique: Technique) => {
          flatTechnique[technique.id] = technique;
        });

        return flatTechnique;
      },
      {}
    );
  }

  return Object.assign({}, flatTechniques);
};

const getOscarTechnique = (techniqueId: string): Technique => {
  const matrix = getFlatTechniques();
  return matrix[techniqueId];
};

export { getOscarMatrix, getOscarTechnique };
