/** Command-line tool to generate Markov text. */
const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require("./markov");
const argv = process.argv;
let args = argv[2];

async function fromFile(path) {
    fs.readFile(argv[3], 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1)
        }
        let mm = new MarkovMachine(data)
        let generatedText = mm.makeText(argv[4])
        console.log(generatedText)
    })
}

async function fromUrl(path) {
    return await axios.get(path)
        .then(req => {
            let mm = new MarkovMachine(req.data);
            let generatedText = mm.makeText(argv[4])
            console.log(generatedText)
        })
}


if (args == "file") {
    fromFile(argv[3])
} else if (args == "url") {
    fromUrl(argv[3])
} else {
    try{
        let mm = new MarkovMachine(args);
        let generatedText = mm.makeText(argv[3]);
        console.log(generatedText);
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}