const makeText = require("./makeText");

describe("top level script tests", () => {
    test("test file", () => {
        const logSpy = jest.spyOn(console, 'log');
        process.argv.push('file', 'eggs.txt', '15');
        makeText.checkArgs('file');
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("do"));
    })
    test("test string", () => {
        const logSpy = jest.spyOn(console, 'log');
        process.argv = ['node', 'jest', 'the cat in the hat', '15'];
        makeText.checkArgs(process.argv[2]);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("cat"));
    })
})