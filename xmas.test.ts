import { xmasTree } from "./xmas";

// tree height = input + 2
// tree width = input * 2 - 1
// input = 0 => only stem
// input < 0 => throw error
// input float => round to closest integer

describe("Given XmasTree", () => {
  let xmas: xmasTree;
  let result: string[];
  beforeEach(() => {
    xmas = new xmasTree();
  });
  it("When the tree is initialized with 0, Then the tree with height 2 is drawn", () => {
    result = xmas.draw(0);
    expect(result.length).toEqual(2);
  });
  it("When the tree is initialized with 0, Then the tree with height 2 has # # as stem", () => {
    result = xmas.draw(0);
    expect(result[0]).toEqual("#");
    expect(result[1]).toEqual("#");
  });
  it("Then the tree is initialized with 1, Then the tree with height 3 is drawn", () => {
    result = xmas.draw(1);
    expect(result.length).toEqual(3);
  });
});
