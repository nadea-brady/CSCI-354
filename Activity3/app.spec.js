'use strict';

//import the functions to test!
const convert = require('./app');

//  describe allows us to group several tests together
describe("Test the invertCase function", function () {
    it("should return a string of the correct length", function () {
        expect(convert.invertCase('a').length).toEqual(1);
    });
    /* TODO place your "it" tests below */
    it("should correctly invert the case of a single lowercase letter", function () {
        expect(convert.invertCase('a')).toEqual('A');
    });

    it("should correctly invert the case of a single uppercase letter", function () {
        expect(convert.invertCase('A')).toEqual('a');
    });

    it("should correctly invert the case of a mixed string", function () {
        expect(convert.invertCase('CoMpUtEr')).toEqual('cOmPuTeR');
    });

    it("should handle empty strings", function () {
        expect(convert.invertCase('')).toEqual('');
    });

    it("should correctly invert the case of a string with non-alphabetic characters", function () {
        expect(convert.invertCase('Hello, World!')).toEqual('hELLO, wORLD!');
    });
});
