//all the test for SVG
const {Shape, Triangle, Circle, Square } = require("./shapes.js"); 

describe('Triangle class', () => {
    test('should create a triangle with the correct properties', () => {
      const triangle = new Triangle('blue', 'white', 'TRI', 'triangle');
      expect(triangle.fillColor).toBe('blue');
      expect(triangle.textColor).toBe('white');
      expect(triangle.text).toBe('TRI');
      expect(triangle.shape).toBe('triangle');
    });
  });
  
