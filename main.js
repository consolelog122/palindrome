export function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

export function checkPalindrome(input) {
  if (input === "") {
    return "";
  } else if (!isPalindrome(input)) {
    return `${input} is not palindrome`;
  } else {
    return `${input} is palindrome`;
  }
}

export function display() {
  const input = document.getElementById("input-palindrome");
  const button = document.getElementById("btn-palindrome");
  const answer = document.getElementById("p-answer");

  button.addEventListener("click", () => {
    answer.textContent = checkPalindrome(input.value);
  });
}

if (typeof document !== "undefined") {
  display();
}

// console.log(typeof document == "undefined"); false karna jalan di browser
