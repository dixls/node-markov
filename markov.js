/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let uniqueWords = [...new Set(this.words)];
    this.chains = {};
    console.log(uniqueWords)
    for (let uniqueWord of uniqueWords) {
      for (let word of this.words) {
        if (word == uniqueWord) {
          let i = this.words.indexOf(word);
          let nextWord = this.words[i + 1];
          if (this.chains[word]) {
            this.chains[word].push(nextWord);
            console.log("True")
          }
          else {
            this.chains[word] = [nextWord];
            console.log("False")
          }
        }
      }
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

module.exports = { MarkovMachine }