const { MarkovMachine } = require("./markov")

describe("markov class tests", function () {
    let testMm;
    let catChains;
    beforeEach(function () {
        testMm = new MarkovMachine("the cat in the hat")
        catChains = {
            the: ['cat', 'hat'],
            cat: ['in'],
            in: ['the'],
            hat: [undefined]
        };
    })

    test('make chain', function () {
        expect(testMm.chains).toEqual(catChains);
    });
    test('make text', () => {
        let newText = testMm.makeText();
        expect(typeof newText).toBe('string');
        let splitText = newText.split(/[ \r\n]+/);
        expect(testMm.chains[splitText[0]]).toContain(splitText[1]);
    });
})