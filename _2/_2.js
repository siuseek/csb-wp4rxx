/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_2/costumes/костюм 1.svg", {
        x: 284.7073669433594,
        y: 215.06248474121094
      })
    ];

    this.sounds = [
      new Sound(
        "Sonic Heroes - We Can",
        "./_2/sounds/Sonic Heroes - We Can.wav"
      ),
      new Sound(
        "Sonic The Hedgehog - Fastest Thing Alive-Full Version",
        "./_2/sounds/Sonic The Hedgehog - Fastest Thing Alive-Full Version.wav"
      ),
      new Sound("Sonic - His World", "./_2/sounds/Sonic - His World.mp3"),
      new Sound("34_intro (1) (1)", "./_2/sounds/34_intro (1) (1).mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    yield* this.wait(1);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 5;
      yield;
    }
  }

  *whenGreenFlagClicked2() {}

  *whenGreenFlagClicked3() {
    yield* this.wait(3);
    while (true) {
      yield* this.playSoundUntilDone("Sonic Heroes - We Can");
      yield* this.playSoundUntilDone(
        "Sonic The Hedgehog - Fastest Thing Alive-Full Version"
      );
      yield* this.playSoundUntilDone("Sonic - His World");
      yield* this.playSoundUntilDone("34_intro (1) (1)");
      yield;
    }
  }
}
