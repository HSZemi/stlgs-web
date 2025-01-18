import type {ListData} from "@/interfaces.ts";

export const HISTORICAL_DATA: { [key: string]: ListData[] } = {
  '2012': [
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) & Unabhängige", listVotes: 513, peopleVotes: 1187 - 513},
    {name: "Grüne Hochschulgruppe (ghg) - campus:grün", listVotes: 649, peopleVotes: 1286 - 649},
    {name: "Juso-Hochschulgruppe", listVotes: 336, peopleVotes: 796 - 336},
    {name: "Liste undogmatischer StudentInnen (LUST)", listVotes: 110, peopleVotes: 290 - 110},
    {name: "Piraten-Hochschulgruppe Bonn", listVotes: 143, peopleVotes: 238 - 143},
    {name: "Universitäres Bündnis für Innovation und Gerechtigkeit (UBIG)", listVotes: 40, peopleVotes: 149 - 40},
    {name: "Re(h) - Partei", listVotes: 54, peopleVotes: 103 - 54},
    {name: "Die Demokraten", listVotes: 57, peopleVotes: 105 - 57},
  ],

  '2013': [
    {name: "Grüne Hochschulgruppe-campus:grün", listVotes: 680, peopleVotes: 1426 - 680},
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) & Unabhängige", listVotes: 376, peopleVotes: 1066 - 376},
    {name: "Juso-Hochschulgruppe", listVotes: 386, peopleVotes: 980 - 386},
    {name: "LUST - Liste undogmatischer StudentInnen", listVotes: 98, peopleVotes: 250 - 98},
    {name: "PIRATEN-HOCHSCHULGRUPPE BONN", listVotes: 75, peopleVotes: 156 - 75},
    {name: "LHG - Liberale Hochschulgruppe", listVotes: 122, peopleVotes: 294 - 122},
  ],

  '2014': [
    {name: "Grüne Hochschulgruppe - campus:grün", listVotes: 657, peopleVotes: 1214 - 657},
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) & Unabhängige", listVotes: 447, peopleVotes: 1025 - 447},
    {name: "Juso-Hochschulgruppe", listVotes: 412, peopleVotes: 1056 - 412},
    {name: "Liberale Hochschulgruppe an der Uni Bonn (LHG)", listVotes: 221, peopleVotes: 430 - 221},
    {name: "Liste Undogmatischer StudentInnen (LUST)", listVotes: 135, peopleVotes: 253 - 135},
    {name: "Piraten-Hochschulgruppe Bonn", listVotes: 96, peopleVotes: 177 - 96},
  ],

  '2015': [
    {name: "Juso-HSG", listVotes: 711, peopleVotes: 1685 - 711},
    {name: "RCDS & Unabhängige", listVotes: 410, peopleVotes: 1078 - 410},
    {name: "Liberale Hochschulgruppe an der Uni Bonn", listVotes: 328, peopleVotes: 562 - 328},
    {name: "Liste undogmatischer StudentInnen (LUST)", listVotes: 331, peopleVotes: 602 - 331},
    {name: "Piraten-Hochschulgruppe Bonn", listVotes: 163, peopleVotes: 301 - 163},
  ],

  '2016': [
    {name: "Juso-HSG", listVotes: 585, peopleVotes: 1333 - 585},
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) & Unabhängige", listVotes: 466, peopleVotes: 1423 - 466},
    {name: "Liste undogmatischer StudentInnen (LUST)", listVotes: 225, peopleVotes: 447 - 225},
    {name: "Liberale Hochschulgruppe Bonn", listVotes: 290, peopleVotes: 627 - 290},
    {name: "Piraten-Hochschulgruppe Bonn", listVotes: 104, peopleVotes: 161 - 104},
    {name: "Die LISTE", listVotes: 197, peopleVotes: 407 - 197},
    {name: "Grüne Hochschulgruppe", listVotes: 607, peopleVotes: 1053 - 607},
    {name: "KULT", listVotes: 156, peopleVotes: 356 - 156},
  ],

  '2017': [
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) & Unabhängige", listVotes: 410, peopleVotes: 1080 - 410},
    {name: "Juso-HSG", listVotes: 723, peopleVotes: 1450 - 723},
    {name: "Liberale Hochschulgruppe Bonn", listVotes: 351, peopleVotes: 672 - 351},
    {name: "Liste Undogmatischer StudentInnen (LUST)", listVotes: 172, peopleVotes: 348 - 172},
    {name: "Die LISTE - die Hochschulgruppe der Partei Die PARTEI", listVotes: 147, peopleVotes: 208 - 147},
    {name: "KULT", listVotes: 131, peopleVotes: 319 - 131},
    {name: "Grüne Hochschulgruppe & Piraten", listVotes: 570, peopleVotes: 855 - 570},
    {name: "Sozialistisch-Demokratischer Studierendenverband (SDS)", listVotes: 102, peopleVotes: 159 - 102},
  ],

  '2018': [
    {name: "Juso-HSG", listVotes: 572, peopleVotes: 1381 - 572},
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) & Unabhängige", listVotes: 385, peopleVotes: 851 - 385},
    {name: "Liberale Hochschulgruppe Bonn", listVotes: 418, peopleVotes: 772 - 418},
    {name: "Liste Undogmatischer StudentInnen (LUST)", listVotes: 174, peopleVotes: 299 - 174},
    {name: "Die Linke.SDS Bonn", listVotes: 222, peopleVotes: 346 - 222},
    {name: "Grüne Hochschulgruppe", listVotes: 823, peopleVotes: 1208 - 823},
    {name: "IYSSE-Hochschulgruppe", listVotes: 20, peopleVotes: 30 - 20},
  ],

  '2019': [
    {name: "Juso-HSG", listVotes: 649, peopleVotes: 1282 - 649},
    {name: "Grüne Hochschulgruppe", listVotes: 1112, peopleVotes: 1620 - 1112},
    {name: "Ring Christlich-Demokratischer Studenten (RCDS) und Unabhängige", listVotes: 407, peopleVotes: 872 - 407},
    {name: "Liberale Hochschulgruppe", listVotes: 795, peopleVotes: 1051 - 795},
    {name: "DieLinke.SDS Bonn", listVotes: 221, peopleVotes: 334 - 221},
    {name: "Liste undogmatischer StudentInnen (LUST)", listVotes: 190, peopleVotes: 338 - 190},
  ],

  '2020': [
    {name: "GHG", listVotes: 1002, peopleVotes: 1500 - 1002},
    {name: "JUSOS", listVotes: 474, peopleVotes: 1102 - 474},
    {name: "LHG", listVotes: 337, peopleVotes: 568 - 337},
    {name: "RCDS", listVotes: 260, peopleVotes: 706 - 260},
    {name: "LUST", listVotes: 170, peopleVotes: 337 - 170},
    {name: "SDS", listVotes: 207, peopleVotes: 365 - 207},
    {name: "BILLA", listVotes: 18, peopleVotes: 27 - 18},
    {name: "DANCV", listVotes: 47, peopleVotes: 75 - 47},
    {name: "LP", listVotes: 409, peopleVotes: 599 - 409},
    {name: "VOLT", listVotes: 228, peopleVotes: 332 - 228},
  ],

  '2021': [
    {name: "GHG", listVotes: 1591, peopleVotes: 2330 - 1591},
    {name: "JUSOS", listVotes: 379, peopleVotes: 942 - 379},
    {name: "RCDS", listVotes: 456, peopleVotes: 928 - 456},
    {name: "LP", listVotes: 362, peopleVotes: 594 - 362},
    {name: "LHG", listVotes: 215, peopleVotes: 372 - 215},
    {name: "SDS", listVotes: 206, peopleVotes: 312 - 206},
    {name: "LUST", listVotes: 232, peopleVotes: 410 - 232},
    {name: "VOLT", listVotes: 303, peopleVotes: 431 - 303},
  ],

  '2022': [
    {name: "GHG", listVotes: 1276, peopleVotes: 1692 - 1276},
    {name: "JUSOS", listVotes: 328, peopleVotes: 787 - 328},
    {name: "RCDS", listVotes: 309, peopleVotes: 578 - 309},
    {name: "LP", listVotes: 336, peopleVotes: 504 - 336},
    {name: "LUST", listVotes: 230, peopleVotes: 354 - 230},
    {name: "LHG", listVotes: 221, peopleVotes: 361 - 221},
    {name: "SDS", listVotes: 168, peopleVotes: 256 - 168},
  ],

  '2023': [
    {name: "GHG", listVotes: 483, peopleVotes: 962 - 483},
    {name: "JUSOS", listVotes: 235, peopleVotes: 639 - 235},
    {name: "RCDS", listVotes: 188, peopleVotes: 531 - 188},
    {name: "LP", listVotes: 271, peopleVotes: 557 - 271},
    {name: "LHG", listVotes: 84, peopleVotes: 262 - 84},
    {name: "LUST", listVotes: 155, peopleVotes: 277 - 155},
    {name: "SDS", listVotes: 57, peopleVotes: 103 - 57},
    {name: "DZENT", listVotes: 25, peopleVotes: 68 - 25},
    {name: "LIBO", listVotes: 15, peopleVotes: 23 - 15},
  ],

  '2024': [
    {name: "LGL", listVotes: 418, peopleVotes: 726 - 418},
    {name: "JUSOS", listVotes: 254, peopleVotes: 605 - 254},
    {name: "LP", listVotes: 379, peopleVotes: 719 - 379},
    {name: "RCDS", listVotes: 188, peopleVotes: 467 - 188},
    {name: "LUST", listVotes: 156, peopleVotes: 281 - 156},
    {name: "LHG", listVotes: 76, peopleVotes: 163 - 76},
    {name: "IMS", listVotes: 47, peopleVotes: 84 - 47},
    {name: "CHRIS", listVotes: 31, peopleVotes: 68 - 31},
  ],

  '2025': [
    {name: "LP", listVotes: 515, peopleVotes: 494},
    {name: "JLGL", listVotes: 580, peopleVotes: 752},
    {name: "RCDS", listVotes: 203, peopleVotes: 279},
    {name: "LUST", listVotes: 109, peopleVotes: 90},
    {name: "LHG", listVotes: 85, peopleVotes: 110},
    {name: "SDS", listVotes: 273, peopleVotes: 270},
  ],

}
