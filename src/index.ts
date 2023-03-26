import fs from "fs";
import { FlatTechniques, OscarMatrix, Tactic, Technique } from "./types";

let oscarMatrix: any = [];
let flatTechniques: any = {};

const getOscarMatrix = (): OscarMatrix => {
  if (oscarMatrix.length === 0) {
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
        const tactic = matrix[tacticId];

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
