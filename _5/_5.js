/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 40", "./_5/costumes/костюм 40.svg", {
        x: 210.6717885087138,
        y: 110.947865
      }),
      new Costume("костюм 41", "./_5/costumes/костюм 41.svg", {
        x: 210.67178843355074,
        y: 110.947865
      }),
      new Costume("костюм 42", "./_5/costumes/костюм 42.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 2", "./_5/costumes/костюм 2.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 3", "./_5/costumes/костюм 3.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 4", "./_5/costumes/костюм 4.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      })
    ];

    this.sounds = [
      new Sound("Recording_49", "./_5/sounds/Recording_49.wav"),
      new Sound("Recording_50", "./_5/sounds/Recording_50.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "съобщение1" },
        this.whenIReceive1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive1() {}

  *whenGreenFlagClicked2() {}

  *whenIReceive2() {
    this.visible = true;
    while (true) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
  }
}
