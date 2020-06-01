"use strict";
const ctx = document.querySelector("canvas").getContext("2d");
const circle = {
  circlesArr: [],
  working: false,
  rad: () => {
    return Math.floor(Math.random() * 100);
  },
  color: () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  },
  direction: () => {
    return Math.floor(Math.PI * Math.ceil(Math.random() * 2));
  },
  steps: () => {
    return Math.floor(Math.random() * 100);
  },
  drow: function (obj) {
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI, false);
    ctx.strokeStyle = obj.c;
    ctx.lineWidth = Math.ceil(obj.r / 10);
    ctx.stroke();
    ctx.closePath();
  },
  Circle: function (x, y, r, c, d, s) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.d = d;
    this.s = s;
  },
  addCircle: function (x, y) {
    let newObj = new this.Circle(x, y, this.rad(), this.color(), this.direction(), this.steps());
    this.circlesArr.push(newObj);
    this.drow(newObj);
  },
};
document.querySelector("canvas").onclick = (e) => {
  circle.addCircle(e.offsetX, e.offsetY);
  console.dir(circle.circlesArr);
};
