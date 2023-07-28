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
    render() {

        return "needs to be a string"
    }
}

class Triangle extends Shape {

    render() {

        return "needs to be a string"
    }
}
const triangle1 = new Triangle();
class Circle extends Shape {
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.fillColor}>`
    }
}

class Square extends Shape {

    render() {

        return "needs to be a string"
    }
}

//export as an obj
module.exports = { Triangle: Triangle, Circle: Circle, Square: Square }
