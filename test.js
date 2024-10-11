
function add(a, b) {
    return a + b;
   }
   
   describe(add, () => {
    
    it('', () => {
     
      const num1 = 2;
      const num2 = 3;
    
      const result = add(num1, num2);   
      expect(result).toBe(5);
    });
   });
   
   ///////////////////////////////////////
   
   function add (a, b)  {
    return (8 * (a + b)) ;
   }
   
   describe(add, () => {
    
    it('', () => {
     
      const num1 = 2;
      const num2 = 3;
    
      const result = add(num1, num2);   
      expect(result).toBe(30);
    });
   });
   
   /////////////////////////////////////////
   function add(a, b) {
    return a + b;
   }
   
   describe(add, () => {
    it('', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });
   });
   ////////////////////////////////////////
   function add(a, b) {
    return a + b;
   }
   
   function subtract(a, b) {
    return a - b;
   }
   
   function multiply(a, b) {
    return a * b;
   }
   
   module.exports = { add, subtract, multiply };
   
   const {add, subtract, multiply } = require('./functions');
   
   describe('add, subtract, multiply', () => {
    test('add function should add two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });
   
    test('subtract function should subtract two numbers', () => {
      expect(subtract(5, 2)).toBe(3);
      expect(subtract(1, 2)).toBe(-1);
    });
   
    test('multiply function should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(0, 5)).toBe(0);
    });
   });
   