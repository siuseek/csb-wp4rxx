/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_3/costumes/костюм 1.svg", {
        x: 105.902455,
        y: 68.35416000000032
      }),
      new Costume("костюм 3", "./_3/costumes/костюм 3.svg", {
        x: 105.902445,
        y: 68.35417000000032
      }),
      new Costume("костюм 2", "./_3/costumes/костюм 2.svg", {
        x: 105.902445,
        y: 68.35417000000032
      }),
      new Costume("костюм 4", "./_3/costumes/костюм 4.svg", {
        x: 105.902445,
        y: 68.35417000000032
      }),
      new Costume("костюм 6", "./_3/costumes/костюм 6.svg", {
        x: 105.902445,
        y: 68.35417000000032
      }),
      new Costume("костюм 7", "./_3/costumes/костюм 7.svg", {
        x: 105.902445,
        y: 68.35417000000032
      }),
      new Costume("костюм 5", "./_3/costumes/костюм 5.svg", {
        x: 105.902445,
        y: 68.35417000000032
      })
    ];

    this.sounds = [new Sound("пук", "./_3/sounds/пук.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "костюм 1";
    yield* this.wait(3.5);
    for (let i = 0; i < 7; i++) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(2.5);
    this.visible = true;
  }
}
