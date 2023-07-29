class Shape {
    constructor(fillColor, textColor, text, shape) {
      this.fillColor = fillColor;
      this.textColor = textColor;
      this.text = text;
      this.shape = shape;
    }
  
    setColor(fillColor) {
      this.fillColor = fillColor;
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  }
  
  class Triangle extends Shape {
    constructor(fillColor, textColor, text, shape) {
      super(fillColor, textColor, text, shape); // Call super with required arguments
    }
  
    render() {
      return `<polygon xmlns="http://www.w3.org/2000/svg" points="50,200 250,200 150,50" fill="${this.fillColor}">
        <text x="150" y="150" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text>
      </polygon>`;
    }
  }
  
  class Circle extends Shape {
    constructor(fillColor, textColor, text, shape) {
      super(fillColor, textColor, text, shape); // Call super with required arguments
    }
  
    render() {
      return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="150" r="80" fill="${this.fillColor}">
        <text x="150" y="150" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text>
      </circle>`;
    }
  }
  
  class Square extends Shape {
    constructor(fillColor, textColor, text, shape) {
      super(fillColor, textColor, text, shape); // Call super with required arguments
    }
  
    render() {
      return `<rect xmlns="http://www.w3.org/2000/svg" x="50" y="50" width="200" height="200" fill="${this.fillColor}" />
        <text x="150" y="150" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text>
      </rect>`;
    }
  }
  
  //export as an obj
  module.exports = { Shape, Triangle, Circle, Square };