import { add } from "@/app/add";

describe("add function", () => {
  //두 개의 숫자를 올바르게 추가합니다: add 함수가 두 개의 양수를 올바르게 추가하는지 확인합니다.
  it("adds two numbers correctly", () => {
    const result = add(2, 3);
    expect(result).toEqual(5);
    //.toEqual(expectedValue): result가 expectedValue와 완전히 동일한지 확인하는 매소드입니다.
  });

  //음수를 올바르게 추가합니다: 함수가 음수를 올바르게 처리하는지 확인합니다.
  it("adds negative numbers correctly", () => {
    const result = add(-2, -3);
    expect(result).toEqual(-5);
  });

  //양수와 음수를 올바르게 추가합니다: 하나의 양수와 하나의 음수를 사용하여 함수를 테스트합니다.
  it("adds a positive and a negative number correctly", () => {
    const result = add(5, -3);
    expect(result).toEqual(2);
  });

  //0을 올바르게 처리: 숫자 중 하나가 0일 때 함수가 올바르게 작동하는지 확인합니다.
  it("handles zero correctly", () => {
    const result = add(5, 0);
    expect(result).toEqual(5);
  });
});
