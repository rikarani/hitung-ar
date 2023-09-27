// prettier-ignore
const arEXP = {
    1 : 0,          21 : 30950,     41 : 155950,
    2 : 375,        22 : 34375,     42 : 167475,
    3 : 875,        23 : 38100,     43 : 179950,
    4 : 1500,       24 : 42100,     44 : 193400,
    5 : 2225,       25 : 46400,     45 : 207800,
    6 : 3075,       26 : 50975,     46 : 223150,
    7 : 4025,       27 : 55850,     47 : 239475,
    8 : 5100,       28 : 61000,     48 : 256750,
    9 : 6300,       29 : 66450,     49 : 275000,
    10 : 7600,      30 : 72175,     50 : 294200,
    11 : 9025,      31 : 78200,     51 : 320600,
    12 : 10550,     32 : 84500,     52 : 349400,
    13 : 12200,     33 : 91100,     53 : 380600,
    14 : 13975,     34 : 98000,     54 : 414200,
    15 : 15850,     35 : 105175,    55 : 450200,
    16 : 17850,     36 : 112650,    56 : 682550,
    17 : 20225,     37 : 120400,    57 : 941500,
    18 : 22725,     38 : 128450,    58 : 1227250,
    19 : 25350,     39 : 136775,    59 : 1540075,
    20 : 28125,     40 : 145400,    60 : 1880200
};

type T = keyof typeof arEXP;
type Params = {
  ar: number;
  exp?: number;
  target: number;
};
type Data = {
  target: number;
  progress: number;
  exp: number;
  butuh: number;
  hari: number;
};

export function hitungAR({ ar, exp = 0, target }: Params): Data {
  const butuh: number = arEXP[target as T] - arEXP[ar as T];

  const hari: number = (butuh - exp) / 2300;
  const progress: number = Math.floor((exp / butuh) * 100);

  return { target, progress, exp, butuh, hari };
}
