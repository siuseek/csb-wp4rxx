/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 3", "./_1/costumes/костюм 3.svg", {
        x: 356.9573669433594,
        y: 524.2506099522959
      }),
      new Costume("костюм 18", "./_1/costumes/костюм 18.svg", {
        x: 356.9573669433594,
        y: 524.2506099522959
      }),
      new Costume("костюм 16", "./_1/costumes/костюм 16.svg", {
        x: 356.9573669433594,
        y: 524.2506099522959
      }),
      new Costume("костюм 5", "./_1/costumes/костюм 5.svg", {
        x: 356.957365,
        y: 464.25061034027874
      }),
      new Costume("костюм 6", "./_1/costumes/костюм 6.svg", {
        x: 356.957355,
        y: 290.25061102083606
      }),
      new Costume("костюм 4", "./_1/costumes/костюм 4.svg", {
        x: 356.9573669433594,
        y: 215.56309469350686
      }),
      new Costume("костюм 7", "./_1/costumes/костюм 7.svg", {
        x: 356.95734500000003,
        y: 195.25061136111472
      }),
      new Costume("костюм 2", "./_1/costumes/костюм 2.svg", {
        x: 210.67180335838768,
        y: 223.54578495353408
      }),
      new Costume("костюм 11", "./_1/costumes/костюм 11.svg", {
        x: 210.67179843355075,
        y: 233.4202112874662
      }),
      new Costume("костюм 8", "./_1/costumes/костюм 8.svg", {
        x: 210.67180179193844,
        y: 267.95475118229524
      }),
      new Costume("костюм 10", "./_1/costumes/костюм 10.svg", {
        x: 210.67180515032612,
        y: 322.0088105966437
      }),
      new Costume("костюм 12", "./_1/costumes/костюм 12.svg", {
        x: 210.6717985087138,
        y: 366.4682158763955
      }),
      new Costume("костюм 9", "./_1/costumes/костюм 9.svg", {
        x: 210.6718018671015,
        y: 132.6944858763955
      }),
      new Costume("костюм 23", "./_1/costumes/костюм 23.svg", {
        x: 210.6718018671015,
        y: 132.6944858763955
      }),
      new Costume("костюм 24", "./_1/costumes/костюм 24.svg", {
        x: 210.6718018671015,
        y: 132.6944858763955
      }),
      new Costume("костюм 25", "./_1/costumes/костюм 25.svg", {
        x: 210.6718018671015,
        y: 132.6944858763955
      }),
      new Costume("костюм 13", "./_1/costumes/костюм 13.svg", {
        x: 210.6718018671015,
        y: 132.6944858763955
      }),
      new Costume("костюм 14", "./_1/costumes/костюм 14.svg", {
        x: 210.6718018671015,
        y: 132.6944858763955
      }),
      new Costume("костюм 15", "./_1/costumes/костюм 15.svg", {
        x: 210.6718083583877,
        y: 269.02185101150786
      }),
      new Costume("костюм 17", "./_1/costumes/костюм 17.svg", {
        x: 210.67180171677538,
        y: 240.0218433898977
      }),
      new Costume("костюм 19", "./_1/costumes/костюм 19.svg", {
        x: 210.67180507516306,
        y: 212.02184576828756
      }),
      new Costume("костюм 20", "./_1/costumes/костюм 20.svg", {
        x: 210.67179843355075,
        y: 183.02183814667742
      }),
      new Costume("костюм 21", "./_1/costumes/костюм 21.svg", {
        x: 210.67180335838768,
        y: 181.52184237838983
      }),
      new Costume("костюм 22", "./_1/costumes/костюм 22.svg", {
        x: 210.67180671677536,
        y: 178.5218447567797
      }),
      new Costume("костюм 27", "./_1/costumes/костюм 27.svg", {
        x: 210.67180671677536,
        y: 178.5218447567797
      }),
      new Costume("костюм 28", "./_1/costumes/костюм 28.svg", {
        x: 210.67180671677536,
        y: 178.5218447567797
      }),
      new Costume("костюм 26", "./_1/costumes/костюм 26.svg", {
        x: 210.67180335838768,
        y: 181.52184237838983
      }),
      new Costume("костюм 29", "./_1/costumes/костюм 29.svg", {
        x: 210.67179843355075,
        y: 183.02183814667742
      }),
      new Costume("костюм 30", "./_1/costumes/костюм 30.svg", {
        x: 210.67180179193844,
        y: 200.0218405250673
      }),
      new Costume("костюм 31", "./_1/costumes/костюм 31.svg", {
        x: 210.67180515032612,
        y: 220.6885095701238
      }),
      new Costume("костюм 32", "./_1/costumes/костюм 32.svg", {
        x: 210.6717985087138,
        y: 247.68851194851368
      }),
      new Costume("костюм 33", "./_1/costumes/костюм 33.svg", {
        x: 210.6718018671015,
        y: 273.68851432690354
      }),
      new Costume("костюм 34", "./_1/costumes/костюм 34.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 35", "./_1/costumes/костюм 35.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 36", "./_1/costumes/костюм 36.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 37", "./_1/costumes/костюм 37.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      }),
      new Costume("костюм 38", "./_1/costumes/костюм 38.svg", {
        x: 210.67179507516306,
        y: 110.947865
      }),
      new Costume("костюм 39", "./_1/costumes/костюм 39.svg", {
        x: 210.67178843355074,
        y: 110.947865
      }),
      new Costume("костюм 40", "./_1/costumes/костюм 40.svg", {
        x: 210.67178843355074,
        y: 110.947865
      }),
      new Costume("костюм 41", "./_1/costumes/костюм 41.svg", {
        x: 210.67179507516306,
        y: 110.947865
      }),
      new Costume("костюм 42", "./_1/costumes/костюм 42.svg", {
        x: 210.67180522548918,
        y: 110.94786432690356
      })
    ];

    this.sounds = [
      new Sound("Recording_49", "./_1/sounds/Recording_49.wav"),
      new Sound("Recording_50", "./_1/sounds/Recording_50.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "съобщение1" },
        this.whenIReceive1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(1);
    this.costume = "костюм 3";
    yield* this.wait(1);
    for (let i = 0; i < 31; i++) {
      yield* this.wait(0);
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
    this.broadcast("2");
  }

  *whenIReceive1() {}

  *whenGreenFlagClicked2() {
    while (true) {
      null;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(0);
  }

  *whenGreenFlagClicked4() {
    this.visible = true;
  }
}
