import { isPalindrome, checkPalindrome, display } from "../main";

describe("isPalindrome", () => {
  test("returns true for palindromes", () => {
    expect(isPalindrome("abba")).toBe(true);
    expect(isPalindrome("12121")).toBe(true);
  });

  test("returns false for non-palindromes", () => {
    expect(isPalindrome("12345")).toBe(false);
    expect(isPalindrome("abcd")).toBe(false);
  });
});

describe("checkPalindrome", () => {
  test("returns correct message for palindromes", () => {
    expect(checkPalindrome("katak")).toBe("katak is palindrome");
  });

  test("returns correct message for non-palindromes", () => {
    expect(checkPalindrome("hello")).toBe("hello is not palindrome");
  });

  test("returns empty string for empty input", () => {
    expect(checkPalindrome("")).toBe("");
  });
});

describe("display", () => {
  let mockGetElementById;
  let mockAddEventListener;
  let mockButton;
  let mockInput;
  let mockAnswer;

  beforeEach(() => {
    mockButton = { addEventListener: jest.fn() };
    mockInput = { value: "" };
    mockAnswer = { textContent: "" };

    mockGetElementById = jest.fn((id) => {
      if (id === "btn-palindrome") return mockButton;
      if (id === "input-palindrome") return mockInput;
      if (id === "p-answer") return mockAnswer;
    });

    global.document = {
      getElementById: mockGetElementById,
    };
  });

  test("adds click event listener to button", () => {
    display();
    expect(mockButton.addEventListener).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });

  test("updates answer text content on button click", () => {
    display();
    const clickHandler = mockButton.addEventListener.mock.calls[0][1];

    mockInput.value = "katak";
    clickHandler();
    expect(mockAnswer.textContent).toBe("katak is palindrome");

    mockInput.value = "hello";
    clickHandler();
    expect(mockAnswer.textContent).toBe("hello is not palindrome");
  });
});
