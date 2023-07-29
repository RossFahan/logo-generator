//all the test for SVG
const {Shape, Triangle, Circle, Square } = require("./shapes.js"); 


describe('Triangle class', () => {
  test('render should return the correct SVG string for a triangle', () => {
    const triangle = new Triangle('green', 'grey', 'TRI', 'triangle');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,200 250,200 150,50" fill="green" /><text x="150" y="150" text-anchor="middle" fill="grey" font-size="40">TRI</text></svg>`;
    expect(triangle.render()).toBe(expectedSVG);
  });
});