"use strict";
const ctx = document.querySelector("canvas").getContext("2d");
const circle = {
  circlesArr: [],
  protoCircle: {
    rad: () => {
      return Math.floor(Math.random() * 100);
    },
    color: () => {
      return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    },
    createCircle: function (x, y) {
      let r = this.rad();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI, false);
      ctx.strokeStyle = this.color();
      ctx.lineWidth = Math.ceil(r / 10);
      ctx.stroke();
      ctx.closePath();
    },
  },
  addCircle: function (x, y) {
    this.circlesArr.push(Object.create(this.protoCircle));
    this.circlesArr[this.circlesArr.length - 1].createCircle(x, y);
  },
};
document.querySelector("canvas").onclick = (e) => {
  circle.addCircle(e.offsetX, e.offsetY);
};
