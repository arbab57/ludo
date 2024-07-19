const sq01 = document.querySelector("#sq-01");
const sq02 = document.querySelector("#sq-02");
const sq03 = document.querySelector("#sq-03");
const sq04 = document.querySelector("#sq-04");
const sq05 = document.querySelector("#sq-05");
const sq06 = document.querySelector("#sq-06");
const sq07 = document.querySelector("#sq-07");
const sq08 = document.querySelector("#sq-08");
const sq09 = document.querySelector("#sq-09");
const sq10 = document.querySelector("#sq-10");
const sq11 = document.querySelector("#sq-11");
const sq12 = document.querySelector("#sq-12");
const sq13 = document.querySelector("#sq-13");
const sq14 = document.querySelector("#sq-14");
const sq15 = document.querySelector("#sq-15");
const sq16 = document.querySelector("#sq-16");
const sq17 = document.querySelector("#sq-17");
const sq18 = document.querySelector("#sq-18");
const sq19 = document.querySelector("#sq-19");
const sq20 = document.querySelector("#sq-20");
const sq21 = document.querySelector("#sq-21");
const sq22 = document.querySelector("#sq-22");
const sq23 = document.querySelector("#sq-23");
const sq24 = document.querySelector("#sq-24");
const sq25 = document.querySelector("#sq-25");
const sq26 = document.querySelector("#sq-26");
const sq27 = document.querySelector("#sq-27");
const sq28 = document.querySelector("#sq-28");
const sq29 = document.querySelector("#sq-29");
const sq30 = document.querySelector("#sq-30");
const sq31 = document.querySelector("#sq-31");
const sq32 = document.querySelector("#sq-32");
const sq33 = document.querySelector("#sq-33");
const sq34 = document.querySelector("#sq-34");
const sq35 = document.querySelector("#sq-35");
const sq36 = document.querySelector("#sq-36");
const sq37 = document.querySelector("#sq-37");
const sq38 = document.querySelector("#sq-38");
const sq39 = document.querySelector("#sq-39");
const sq40 = document.querySelector("#sq-40");
const sq41 = document.querySelector("#sq-41");
const sq42 = document.querySelector("#sq-42");
const sq43 = document.querySelector("#sq-43");
const sq44 = document.querySelector("#sq-44");
const sq45 = document.querySelector("#sq-45");
const sq46 = document.querySelector("#sq-46");
const sq47 = document.querySelector("#sq-47");
const sq48 = document.querySelector("#sq-48");
const sq49 = document.querySelector("#sq-49");
const sq50 = document.querySelector("#sq-50");
const sq51 = document.querySelector("#sq-51");
const sq52 = document.querySelector("#sq-52");
const sq53 = document.querySelector("#sq-53");

const sqg01 = document.querySelector("#sq-g01");
const sqg02 = document.querySelector("#sq-g02");
const sqg03 = document.querySelector("#sq-g03");
const sqg04 = document.querySelector("#sq-g04");
const sqg05 = document.querySelector("#sq-g05");

const sqy01 = document.querySelector("#sq-y01");
const sqy02 = document.querySelector("#sq-y02");
const sqy03 = document.querySelector("#sq-y03");
const sqy04 = document.querySelector("#sq-y04");
const sqy05 = document.querySelector("#sq-y05");

const sqb01 = document.querySelector("#sq-b01");
const sqb02 = document.querySelector("#sq-b02");
const sqb03 = document.querySelector("#sq-b03");
const sqb04 = document.querySelector("#sq-b04");
const sqb05 = document.querySelector("#sq-b05");

const sqr01 = document.querySelector("#sq-r01");
const sqr02 = document.querySelector("#sq-r02");
const sqr03 = document.querySelector("#sq-r03");
const sqr04 = document.querySelector("#sq-r04");
const sqr05 = document.querySelector("#sq-r05");

const spg1 = document.querySelector("#g-01");
const spg2 = document.querySelector("#g-02");
const spg3 = document.querySelector("#g-03");
const spg4 = document.querySelector("#g-04");

const spy1 = document.querySelector("#y-01");
const spy2 = document.querySelector("#y-02");
const spy3 = document.querySelector("#y-03");
const spy4 = document.querySelector("#y-04");

const spb1 = document.querySelector("#b-01");
const spb2 = document.querySelector("#b-02");
const spb3 = document.querySelector("#b-03");
const spb4 = document.querySelector("#b-04");

const spr1 = document.querySelector("#r-01");
const spr2 = document.querySelector("#r-02");
const spr3 = document.querySelector("#r-03");
const spr4 = document.querySelector("#r-04");

const sqwg = document.querySelector("#sq-wg");
const sqwy = document.querySelector("#sq-wy");
const sqwb = document.querySelector("#sq-wb");
const sqwr = document.querySelector("#sq-wr");

const opg = 3;
const opy = 16;
const opb = 29;
const opr = 42;

const btnRoll = document.querySelector("#btn-roll");
const inputRoll = document.querySelector("#input-roll");
const screen = document.querySelector("#screen");
const turnScreen = document.querySelector("#turn-screen");

const squares = [
  sq01,
  sq02,
  sq03,
  sq04,
  sq05,
  sq06,
  sq07,
  sq08,
  sq09,
  sq10,
  sq11,
  sq12,
  sq13,
  sq14,
  sq15,
  sq16,
  sq17,
  sq18,
  sq19,
  sq20,
  sq21,
  sq22,
  sq23,
  sq24,
  sq25,
  sq26,
  sq27,
  sq28,
  sq29,
  sq30,
  sq31,
  sq32,
  sq33,
  sq34,
  sq35,
  sq36,
  sq37,
  sq38,
  sq39,
  sq40,
  sq41,
  sq42,
  sq43,
  sq44,
  sq45,
  sq46,
  sq47,
  sq48,
  sq49,
  sq50,
  sq51,
  sq52,
  sq53,

  sqg01,
  sqg02,
  sqg03,
  sqg04,
  sqg05,

  sqy01,
  sqy02,
  sqy03,
  sqy04,
  sqy05,

  sqb01,
  sqb02,
  sqb03,
  sqb04,
  sqb05,

  sqr01,
  sqr02,
  sqr03,
  sqr04,
  sqr05,

  spg1,
  spg2,
  spg3,
  spg4,

  spy1,
  spy2,
  spy3,
  spy4,

  spb1,
  spb2,
  spb3,
  spb4,

  spr1,
  spr2,
  spr3,
  spr4,

  sqwg,
  sqwy,
  sqwb,
  sqwr,
];

const pieces = [
  {
    pieceName: "g1",
    startingPostion: 73,
    currentPostion: 73,
    html: `<div id="pieceg1" class="piece pieceg"></div>`,
    id: "pieceg1",
    team: 1,
  },
  {
    pieceName: "g2",
    startingPostion: 74,
    currentPostion: 74,
    html: `<div id="pieceg2" class="piece pieceg" ></div>`,
    id: "pieceg2",
    team: 1,
  },
  {
    pieceName: "g3",
    startingPostion: 75,
    currentPostion: 75,
    html: `<div id="pieceg3" class="piece pieceg" ></div>`,
    id: "pieceg3",
    team: 1,
  },
  {
    pieceName: "g4",
    startingPostion: 76,
    currentPostion: 76,
    html: `<div id="pieceg4" class="piece pieceg" ></div>`,
    id: "pieceg4",
    team: 1,
  },

  {
    pieceName: "y1",
    startingPostion: 77,
    currentPostion: 77,
    html: `<div id="piecey1" class="piece piecey" ></div>`,
    id: "piecey1",
    team: 2,
  },
  {
    pieceName: "y2",
    startingPostion: 78,
    currentPostion: 78,
    html: `<div id="piecey2" class="piece piecey" ></div>`,
    id: "piecey2",
    team: 2,
  },
  {
    pieceName: "y3",
    startingPostion: 79,
    currentPostion: 79,
    html: `<div id="piecey3" class="piece piecey" ></div>`,
    id: "piecey3",
    team: 2,
  },
  {
    pieceName: "y4",
    startingPostion: 80,
    currentPostion: 80,
    html: `<div id="piecey4" class="piece piecey" ></div>`,
    id: "piecey4",
    team: 2,
  },

  {
    pieceName: "b1",
    startingPostion: 81,
    currentPostion: 81,
    html: `<div id="pieceb1" class="piece pieceb" ></div>`,
    id: "pieceb1",
    team: 3,
  },
  {
    pieceName: "b2",
    startingPostion: 82,
    currentPostion: 82,
    html: `<div id="pieceb2" class="piece pieceb" ></div>`,
    id: "pieceb2",
    team: 3,
  },
  {
    pieceName: "b3",
    startingPostion: 83,
    currentPostion: 83,
    html: `<div id="pieceb3" class="piece pieceb" ></div>`,
    id: "pieceb3",
    team: 3,
  },
  {
    pieceName: "b4",
    startingPostion: 84,
    currentPostion: 84,
    html: `<div id="pieceb4" class="piece pieceb" ></div>`,
    id: "pieceb4",
    team: 3,
  },

  {
    pieceName: "r1",
    startingPostion: 85,
    currentPostion: 85,
    html: `<div id="piecer1" class="piece piecer" ></div>`,
    id: "piecer1",
    team: 4,
  },
  {
    pieceName: "r2",
    startingPostion: 86,
    currentPostion: 86,
    html: `<div id="piecer2" class="piece piecer" ></div>`,
    id: "piecer2",
    team: 4,
  },
  {
    pieceName: "r3",
    startingPostion: 87,
    currentPostion: 87,
    html: `<div id="piecer3" class="piece piecer" ></div>`,
    id: "piecer3",
    team: 4,
  },
  {
    pieceName: "r4",
    startingPostion: 88,
    currentPostion: 88,
    html: `<div id="piecer4" class="piece piecer" ></div>`,
    id: "piecer4",
    team: 4,
  },
];

const turns = ["green", "yellow", "blue", "red"];

function pieceFunction0() {
  pieceFunction(0, opg);
}
function pieceFunction1() {
  pieceFunction(1, opg);
}
function pieceFunction2() {
  pieceFunction(2, opg);
}
function pieceFunction3() {
  pieceFunction(3, opg);
}
function pieceFunction4() {
  pieceFunction(4, opy);
}
function pieceFunction5() {
  pieceFunction(5, opy);
}
function pieceFunction6() {
  pieceFunction(6, opy);
}
function pieceFunction7() {
  pieceFunction(7, opy);
}
function pieceFunction8() {
  pieceFunction(8, opb);
}
function pieceFunction9() {
  pieceFunction(9, opb);
}
function pieceFunction10() {
  pieceFunction(10, opb);
}
function pieceFunction11() {
  pieceFunction(11, opb);
}
function pieceFunction12() {
  pieceFunction(12, opr);
}
function pieceFunction13() {
  pieceFunction(13, opr);
}
function pieceFunction14() {
  pieceFunction(14, opr);
}
function pieceFunction15() {
  pieceFunction(15, opr);
}
