import { xmasTree } from "./xmas";

// tree height = input + 2
// tree width = input * 2 - 1
// input = 0 => only stem
// input < 0 => throw error
// input float => round to closest integer

describe("Given XmasTree, When the tree is initialized empty", () => {
  let xmas: xmasTree;
  let result: string[];
  beforeEach(() => {
    xmas = new xmasTree();
    result = xmas.draw();
  });
  it("Then the tree with height 2 is written", () => {
    expect(result.length).toEqual(2);
  });
  it("Then the tree with height 2 has # # as stem", () => {
    expect(result[0]).toEqual("#");
    expect(result[1]).toEqual("#");
  });
});
