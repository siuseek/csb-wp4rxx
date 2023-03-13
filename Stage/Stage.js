/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("декор 1", "./Stage/costumes/декор 1.svg", {
        x: 360.561045,
        y: 213.812485
      })
    ];

    this.sounds = [new Sound("пук", "./Stage/sounds/пук.wav")];

    this.triggers = [];
  }
}
