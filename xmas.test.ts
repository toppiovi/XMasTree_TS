import { xmasTree } from "./xmas";

// tree height = input + 2
// tree width = input * 2 - 1
// input = 0 => only stem
// input < 0 => throw error
// input float => round to closest integer

describe("Given XmasTree", () => {
  it("When the tree is initialized empty, Then the tree with height 2 is written", () => {
    const xmas = new xmasTree();
    const result = xmas.draw();
    expect(result.length).toEqual(2);
  });
});
