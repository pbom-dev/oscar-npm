const fs = require("fs");

function main() {
  const filePath = "./src/pbom_data/matrix.json";
  const matrix = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  console.log('Changing "items" to "techniques"');
  const newMatrix = Object.keys(matrix).reduce((newMatrix, tacticId) => {
    const tactic = matrix[tacticId];
    const { items, ...newTactic } = {
      ...tactic,
      techniques: tactic.items,
    };

    return { ...newMatrix, [tacticId]: newTactic };
  }, []);
  console.log("Overwriting matrix.json");
  fs.writeFileSync(filePath, JSON.stringify(newMatrix, null, 4));
}

main();
