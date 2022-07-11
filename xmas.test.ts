import { xmasTree } from "./xmas";

describe("XMasTree", () => {
  it("init", () => {
    const xmas = new xmasTree();
    expect(xmas.test()).toEqual(42);
  });
});
