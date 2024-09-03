const input = document.getElementById("text");
const output = document.getElementById("output");
const button = document.getElementById("button");

const hashtagGenerator = () => {
  let string = input.value;
  if (string.charAt(0) == "#") {
    string = string.slice(1);
  }
  const separated = string.split(" ");

  const capitalizedWords = separated.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const joined = capitalizedWords.join("");

  const regex = /\s+/g;
  const clearInput = joined.replace(regex, "");
  if (clearInput.length === 0) {
    output.innerText = "false input";
  }

  const hashtag = "#" + clearInput;

  if (hashtag.length > 140) {
    output.innerText = "false input";
  } else {
    output.innerText = hashtag;
  }
};

button.addEventListener("click", hashtagGenerator);

console.log(hashtagGenerator("JavaScript")); // #JavaScript
console.log(hashtagGenerator("Do we have a Hashtag")); // #DoWeHaveAHashtag
console.log(hashtagGenerator("    Hello     World   ")); // #HelloWorld
console.log(hashtagGenerator("coding" + " ".repeat(140) + "for life")); // #CodingForLife
console.log(hashtagGenerator("")); // false
console.log(hashtagGenerator(" ")); // false
console.log(hashtagGenerator("a".repeat(144))); // false
console.log(hashtagGenerator(" ".repeat(200))); // false
