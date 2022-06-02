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
    this.uniqueWords = [...new Set(this.words)];
    this.chains = {};
    // console.log(this.uniqueWords)
    for (let uniqueWord of this.uniqueWords) {
      for (let i = 0; i < this.words.length; i++) {
        let word = this.words[i]
        if (word == uniqueWord) {
          let nextWord = this.words[i + 1];
          if (this.chains[word]) {
            this.chains[word].push(nextWord);
          }
          else {
            this.chains[word] = [nextWord];
          }
        }
      }
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let numUniqueWords = this.uniqueWords.length;
    let randomWord = () => this.uniqueWords[Math.floor(Math.random() * numUniqueWords)]
    let newChain = [randomWord()]
    for (let i = 0; i < numWords; i++) {
      let currentWord = newChain[i];
      // console.log(currentWord);
      let possibleNext = this.chains[currentWord];
      // console.log(possibleNext)
      if (possibleNext == undefined) {
        let nextWord = randomWord()
        newChain.push(nextWord)
      }
      else {
        let nextWord = possibleNext[Math.floor(Math.random() * possibleNext.length)]
        newChain.push(nextWord)
      }
    }
    return newChain.join(' ');
  }
}

module.exports = { MarkovMachine }