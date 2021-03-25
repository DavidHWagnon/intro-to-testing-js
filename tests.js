// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    // it('should return the string "Hello, World!" when executed', function() {
    //   expect(helloWorld()).toBe("Hello, World!");
    // });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
    it("should return the string 'Hello, Jane!' when passed the argument of 'Jane'", function() {
        expect(helloWorld("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when passed the argument of 'Alex'", function() {
        expect(helloWorld("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when passed the argument of 'Pat'", function() {
        expect(helloWorld("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when passed the argument of true", function() {
        expect(helloWorld(true)).toBe("Hello, World!");
    });
});

describe('isFive', function(){
   it('should be a defined function', function(){
      expect(typeof isFive).toBe('function');
   });
   it('should return a boolean', function(){
        expect(typeof isFive()).toBe('boolean');
   });
    it('should return a boolean', function(){
        expect(isFive(5)).toBe(true);
    });
    it('should return a boolean', function(){
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed an argument of the number 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed an argument of the number -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed an argument of the number 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed an argument of the string "banana" ', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed an argument of the number 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed an argument of Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed an argument of true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed an argument of false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should should be a defined function', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed an argument of "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed an argument of "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed an argument of "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed an argument of the number 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed an argument of true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed an argument of false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed an argument of "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});


// describe('addOne', function(){
//     it('should be a defined function', function(){
//         expect(typeof addOne).toBe('function');
//     });
//     it('should return a number when called',function(){
//        expect(typeof addOne()).toBe('number');
//     });
//     it('should return the number 3 when passed the argument of the number 2', function () {
//         expect(addOne(2)).toBe(3);
//     });
//     it('should return the number -44 when passed the argument of the number -45', function () {
//         expect(addOne(-45)).toBe(-44);
//     });
//     it('should return the number 18 when passed the argument of the number 17', function () {
//         expect(addOne(17)).toBe(18);
//     });
//     it('should return the number 3.14 when passed the argument of the number 2.14', function () {
//         expect(addOne(2.14)).toBe(3.14);
//     });
//     it('should return the number 34 when passed the argument of the number 33', function () {
//         expect(addOne(33)).toBe(34);
//     });
//     it('should return the number 7 when passed the argument of the number 6', function () {
//         expect(addOne(6)).toBe(7);
//     });
//     it('should return the number 7 when passed the argument of the number 6', function () {
//         expect(addOne(6)).toBe(7);
//     });
// });