import fs from "fs";
import { FlatTechniques, Tactic, Technique } from "./types";

let oscarMatrix: any = [];
let flatTechniques: any = {};
const getOscarMatrix = () => {
  if (oscarMatrix.length === 0) {
    const data = fs.readFileSync(`${__dirname}/pbom_data/matrix.json`, "utf8");
    oscarMatrix = JSON.parse(data);
  }

  return Object.assign({}, oscarMatrix);
};

export const getFlatTechniques = () => {
  if (Object.keys(flatTechniques).length === 0) {
    const matrix = getOscarMatrix();
    flatTechniques = Object.keys(matrix).reduce(
      (flatTechnique: FlatTechniques, tacticId: string) => {
        const tactic = matrix[tacticId];

        tactic.items.forEach((technique: Technique) => {
          flatTechnique[technique.id] = technique;
        });

        return flatTechnique;
      },
      {}
    );
  }

  return Object.assign({}, flatTechniques);
};

const getOscarTechnique = (technique: string) => {
  const matrix = getFlatTechniques();
  return matrix[technique];
};

export { getOscarMatrix, getOscarTechnique };
