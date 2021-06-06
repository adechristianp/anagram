const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
let final = {};
words.forEach((word) => {
  wordSplit = word.split("");
  for (i = 0; i < wordSplit.length - 1; i++) {
    for (j = 0; j < wordSplit.length - i - 1; j++) {
      if (wordSplit[j] > wordSplit[j + 1]) {
        temp = wordSplit[j];
        wordSplit[j] = wordSplit[j + 1];
        wordSplit[j + 1] = temp;
      }
    }
  }
  final[wordSplit] ? final[wordSplit].push(word) : (final[wordSplit] = [word]);
});
console.log(Object.values(final));
