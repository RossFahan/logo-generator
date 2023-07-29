//all the test for SVG
const {Shape, Triangle, Circle, Square } = require("./shapes.js"); 


//Opted out of whitespace for SVG redner strings as it caused testing issues
//Tests
describe('Triangle class', () => {
  test('render should return the correct SVG string for a triangle', () => {
    const triangle = new Triangle('green', 'grey', 'TRI', 'triangle');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,200 250,200 150,50" fill="green" /><text x="150" y="150" text-anchor="middle" fill="grey" font-size="40">TRI</text></svg>`;
    expect(triangle.render()).toBe(expectedSVG);
  });
});

describe('Circle class', () => {
  test('render should return the correct SVG string for a circle', () => {
    const circle = new Circle('blue', 'yellow', 'CIR', 'circle');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" text-anchor="middle" fill="yellow" font-size="60">CIR</text></svg>`;
    expect(circle.render()).toBe(expectedSVG);
  });
});

