import { getOscarMatrix } from "../src";

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
