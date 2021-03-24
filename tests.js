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
    it("should return the string 'Hello, Jane!' when passed the argument of 'Jane", function() {
        expect(helloWorld("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when passed the argument of 'Jane", function() {
        expect(helloWorld("Alex")).toBe("Hello, Alex!");
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