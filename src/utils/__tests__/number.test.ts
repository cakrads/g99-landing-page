import { toIDR, toUSD } from "../number";

describe("toIDR", () => {
  test("should format positive number to IDR without symbol", () => {
    const result = toIDR(1000000, { symbol: false });
    expect(result).toBe("1.000.000");
  });

  test("should format negative number to IDR with symbol", () => {
    const result = toIDR(-500000, { symbol: true });
    expect(result).toBe("-Rp\xa0500.000");
  });

  // test("should return default value for invalid input", () => {
  //   const result = toIDR("abc", { negative: "Invalid" });
  //   expect(result).toBe("Invalid");
  // });
});

describe("toUSD", () => {
  test("should format positive number to USD without symbol", () => {
    const result = toUSD(1000, { symbol: false });
    expect(result).toBe("1,000");
  });

  test("should format negative number to USD with symbol", () => {
    const result = toUSD(-500, { symbol: true });
    expect(result).toBe("-$500");
  });

  // test("should return default value for invalid input", () => {
  //   const result = toUSD("xyz", { negative: "Invalid" });
  //   expect(result).toBe("Invalid");
  // });
});