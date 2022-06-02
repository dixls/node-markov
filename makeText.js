/** Command-line tool to generate Markov text. */
const fs = require('fs');
const { MarkovMachine } = require("./markov");
const argv = process.argv;
let args = argv[2];

let mm = new MarkovMachine(args);

console.log(mm);