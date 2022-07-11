import { xmasTree } from "./xmas";

// tree height = input + 2
// tree width = input * 2 - 1
// input = 0 => only stem
// input < 0 => throw error
// input float => round to closest integer

describe("Given XmasTree", () => {
  let xmas: xmasTree;
  const stemSize = 2;
  let result: string[];
  beforeEach(() => {
    xmas = new xmasTree();
  });
  [0, 1].forEach((height) => {
    it(`When the tree is initialized with ${height}, Then the tree with height ${
      height + stemSize
    } is drawn`, () => {
      result = xmas.draw(height);
      expect(result.length).toEqual(height + stemSize);
    });
  });

  [0, 1].forEach((height) => {
    it(`When the tree is initialized with ${height}, Then the tree with stem of height 2 is drawn`, () => {
      result = xmas.draw(height);
      expect(result[result.length - 1]).toEqual("#");
      expect(result[result.length - 2]).toEqual("#");
    });
  });

  [1].forEach((height) => {
    it(`When the tree is initialized with ${height}, Then the tip of the tree as '#' is drawn`, () => {
      result = xmas.draw(height);
      expect(result[0]).toEqual("#");
    });
  });
});
