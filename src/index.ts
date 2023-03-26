import fs from "fs";

let oscarMatrix: any = [];

const getOscarMatrix = () => {
  if (oscarMatrix.length === 0) {
    const data = fs.readFileSync(`${__dirname}/pbom_data/matrix.json`, "utf8");
    oscarMatrix = JSON.parse(data);
  }

  return Object.assign({}, oscarMatrix);
};
export { getOscarMatrix };
