import Sketch from 'react-p5';

function Bg() {
  var canvas;
  var bubbles = [];
  const setup = (p5) => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    for (let i = 0; i < 50; i++) {
      let x = p5.random(p5.width);
      let y = p5.random(p5.height);
      let r = p5.random(5, 30);
      bubbles[i] = new Bubble(p5, x, y, r);
    }
  };
  const draw = (p5) => {
    p5.background(255); // white background
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
    }
  };
  function Bubble(p5, x, y, r) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.move = function () {
      this.x += p5.random(-0.1, 0.1);
      this.y += p5.random(-0.6, 0.6);
    };
    this.show = function () {
      // This defines colors of the bubbles
      this.p5.fill(255, 124, 0);
      this.p5.ellipse(this.x, this.y, r);
    };
  }
  return <Sketch setup={setup} draw={draw} />;
}
export default Bg;
