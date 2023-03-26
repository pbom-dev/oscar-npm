import { getFlatTechniques, getOscarMatrix, getOscarTechnique } from "../src";

describe("getOscarMatrix", () => {
  const oscar1 = getOscarMatrix();
  const oscarCopy = getOscarMatrix();

  it("should return a copy of oscar after the first call", () => {
    expect(oscar1).not.toBe(oscarCopy);
  });

  it("oscar should have content", () => {
    expect(Object.keys(oscar1).length).not.toBe(0);
  });

  it("oscar copy should have content", () => {
    expect(Object.keys(oscarCopy).length).not.toBe(0);
  });
});

describe("getFlatTechniques", () => {
  it("should return a copy of flatTechniques after first call", () => {
    const technique1 = getFlatTechniques();
    const technique1Copy = getFlatTechniques();
    expect(technique1).not.toBe(technique1Copy)
  })
});

describe("getOscarTechnique", () => {
  it("should return a technique", () => {
    const technique1 = getOscarTechnique("T0124");
    expect(technique1.id).toBe(technique1.id)
  })

  it("should return undefined", () => {
    const technique1 = getOscarTechnique("T0124XXX");
    expect(technique1).toBe(undefined)
  })
});