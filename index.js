import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _1 from "./_1/_1.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import _5 from "./_5/_5.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _1: new _1({
    x: 7.0000004450480375,
    y: 33,
    direction: 90,
    costumeNumber: 15,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  _2: new _2({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  _3: new _3({
    x: 28.999999554951955,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 95,
    visible: true,
    layerOrder: 3
  }),
  _4: new _4({
    x: 82.74805511103081,
    y: -36.221734982138564,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  _5: new _5({
    x: 7,
    y: 33,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
