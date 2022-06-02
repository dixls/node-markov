const { MarkovMachine } = require("./markov")

describe("markov class tests", function () {
    let testMm;
    let catChains;
    beforeAll(function () {
        testMm = new MarkovMachine("the cat in the hat")
        catChains = {
            the: ['cat', 'cat'],
            cat: ['in'],
            in: ['the'],
            hat: [undefined]
        };
    })

    test('make chain', function () {
        expect(testMm.chains).toEqual(catChains);
    });
})