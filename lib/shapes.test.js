//all the test for SVG
const {Triangle, Square, Circle } = require("./lib/shapes.js"); 

//from readme
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');