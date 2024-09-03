// It must start with a hashtag #.
// Ignore spaces in the input.
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// const capitalizer = (string) => {
//   const words = string.split(" ");
//   console.log(words);

//   return;
// };

const hashtagGenerator = (string) => {
  if (typeof string !== "string") {
    return "Input a string";
  }

  const separated = string.split(" ");
  // let array = [];
  // for (const word of separated) {
  //   const capWord = word.charAt(0).toUpperCase() + word.slice(1);
  //   array.push(capWord);
  // }
  const capitalizedWords = separated.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const joined = capitalizedWords.join("");

  const regex = /\s+/g;
  const clearInput = joined.replace(regex, "");
  if (clearInput.length === 0) {
    return false;
  }

  const hashtag = "#" + clearInput;

  if (hashtag.length > 140) {
    return false;
  } else {
    return hashtag;
  }
};

console.log(hashtagGenerator("JavaScript")); // #JavaScript
console.log(hashtagGenerator("Do we have a Hashtag")); // #DoWeHaveAHashtag
console.log(hashtagGenerator("    Hello     World   ")); // #HelloWorld
console.log(hashtagGenerator("coding" + " ".repeat(140) + "for life")); // #CodingForLife
console.log(hashtagGenerator("")); // false
console.log(hashtagGenerator(" ")); // false
console.log(hashtagGenerator("a".repeat(144))); // false
console.log(hashtagGenerator(" ".repeat(200))); // false
