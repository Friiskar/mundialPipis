/* ============================================================
   Resultados oficiales en directo del Mundial 2026.
   ------------------------------------------------------------
   Este archivo arranca VACÍO: mientras no haya nada relleno,
   el ranking muestra a todo el mundo con 0 puntos.
   A medida que vayas escribiendo resultados aquí (orden final
   de un grupo, ganadores de eliminatorias, premios, etc.), la
   app recalcula automáticamente las puntuaciones de cada
   participante. Lo que dejes vacío ("" o []) sigue contando
   como "pendiente" y no resta puntos a nadie.

   Si quieres volver a partir de cero, copia el contenido de
   results-empty.js sobre este archivo.
   ------------------------------------------------------------
   Cambios importantes:
   - YA NO se predicen resultados exactos de partidos: solo el
     ORDEN en que terminan los equipos en cada grupo.
     Por eso este archivo no tiene "groupMatches".
   - "thirdPlace" es la lista de los 8 mejores terceros que
     pasan a dieciseisavos, en el orden 1º-8º.
   - "awards" tiene 5 categorías nuevas y divertidas.
   ============================================================ */

const RESULTS = {
  // Orden final de cada grupo: 1º, 2º, 3º, 4º.
  groups: {
    A: ["México", "Suiza", "Corea del Sur", "Sudáfrica"],
    B: ["España", "Uruguay", "Marruecos", "Escocia"],
    C: ["Argentina", "Canadá", "Bosnia y Herzegovina", "Catar"],
    D: ["Brasil", "Paraguay", "Australia", "Turquía"],
    E: ["Alemania", "Países Bajos", "Suecia", "Túnez"],
    F: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
    G: ["Francia", "Senegal", "Irak", "Noruega"],
    H: ["Inglaterra", "Argelia", "Austria", "Jordania"],
    I: ["Portugal", "Colombia", "RD del Congo", "Uzbekistán"],
    J: ["Croacia", "Ghana", "Panamá", "Haití"],
    K: ["Japón", "Ecuador", "Costa de Marfil", "Curazao"],
    L: ["Marruecos", "Canadá", "Arabia Saudí", "República Checa"]
  },

  // Los 8 mejores terceros que clasifican a dieciseisavos,
  // en orden (1º mejor tercero → 8º mejor tercero).
  thirdPlace: [
    "Austria",
    "Suecia",
    "Irán",
    "Marruecos",
    "Arabia Saudí",
    "Bosnia y Herzegovina",
    "Panamá",
    "Australia"
  ],

  // Quiniela 1X2 — resultados reales de los 3 partidos fijos.
  // Valores admitidos: "1" (gana team1), "X" (empate), "2" (gana team2).
  // Las claves coinciden con `[team1, team2].sort().join('__')` definido en
  // QUINIELA_1X2_MATCHES dentro de app.js. Dejar "" mientras el partido no
  // se haya jugado.
  quiniela1x2: {
    "Mexico__South Korea": "1",
    "Morocco__Scotland":   "1",
    "Spain__Uruguay":      "X"
  },

  knockout: {
    round32: [
      "México",
      "Alemania",
      "Bélgica",
      "Francia",
      "Portugal",
      "Suecia",
      "España",
      "Marruecos",
      "Croacia",
      "Inglaterra",
      "Japón",
      "Colombia",
      "Canadá",
      "Brasil",
      "Argentina",
      "Austria"
    ],
    round16: [
      "México",
      "Francia",
      "Portugal",
      "España",
      "Croacia",
      "Colombia",
      "Brasil",
      "Argentina"
    ],
    quarterfinals: [
      "Francia",
      "España",
      "Croacia",
      "Brasil"
    ],
    semifinals: [
      "Francia",
      "Brasil"
    ],

    champion: "Francia",
    runnerUp: "Brasil",
    finalists: ["Francia", "Brasil"],

    thirdPlaceWinner: "España",
    final: "Francia",
    thirdPlace: "España",

    matches: {
      round32: [
        { match: 73, team1: "A2 Suiza", team2: "B2 Uruguay", winner: "México" },
        { match: 74, team1: "E1 Alemania", team2: "3º Bosnia y Herzegovina", winner: "Alemania" },
        { match: 75, team1: "F1 Bélgica", team2: "C2 Canadá", winner: "Bélgica" },
        { match: 76, team1: "G1 Francia", team2: "F2 Egipto", winner: "Francia" },
        { match: 77, team1: "I1 Portugal", team2: "3º Suecia", winner: "Portugal" },
        { match: 78, team1: "E2 Países Bajos", team2: "I2 Colombia", winner: "Suecia" },
        { match: 79, team1: "A1 México", team2: "3º Irán", winner: "España" },
        { match: 80, team1: "L1 Marruecos", team2: "3º Arabia Saudí", winner: "Marruecos" },
        { match: 81, team1: "J1 Croacia", team2: "3º Panamá", winner: "Croacia" },
        { match: 82, team1: "H1 Inglaterra", team2: "3º Australia", winner: "Inglaterra" },
        { match: 83, team1: "K2 Ecuador", team2: "L2 Canadá", winner: "Japón" },
        { match: 84, team1: "I2 Colombia", team2: "J2 Ghana", winner: "Colombia" },
        { match: 85, team1: "B1 España", team2: "K1 Japón", winner: "Canadá" },
        { match: 86, team1: "D1 Brasil", team2: "H2 Argelia", winner: "Brasil" },
        { match: 87, team1: "C1 Argentina", team2: "3º Austria", winner: "Argentina" },
        { match: 88, team1: "H3 Austria", team2: "D2 Paraguay", winner: "Austria" }
      ],
      round16: [
        { match: 89, team1: "México", team2: "Alemania", winner: "México" },
        { match: 90, team1: "Bélgica", team2: "Francia", winner: "Francia" },
        { match: 91, team1: "Portugal", team2: "Suecia", winner: "Portugal" },
        { match: 92, team1: "España", team2: "Marruecos", winner: "España" },
        { match: 93, team1: "Croacia", team2: "Inglaterra", winner: "Croacia" },
        { match: 94, team1: "Japón", team2: "Colombia", winner: "Colombia" },
        { match: 95, team1: "Canadá", team2: "Brasil", winner: "Brasil" },
        { match: 96, team1: "Argentina", team2: "Austria", winner: "Argentina" }
      ],
      quarterfinals: [
        { match: 97, team1: "México", team2: "Francia", winner: "Francia" },
        { match: 98, team1: "Portugal", team2: "España", winner: "España" },
        { match: 99, team1: "Croacia", team2: "Colombia", winner: "Croacia" },
        { match: 100, team1: "Brasil", team2: "Argentina", winner: "Brasil" }
      ],
      semifinals: [
        { match: 101, team1: "Francia", team2: "España", winner: "Francia" },
        { match: 102, team1: "Croacia", team2: "Brasil", winner: "Brasil" }
      ],
      thirdPlace: [
        { match: 103, team1: "España", team2: "Croacia", winner: "España" }
      ],
      final: [
        { match: 104, team1: "Francia", team2: "Brasil", winner: "Francia" }
      ]
    }
  },

  semifinalists: ["Francia", "España", "Croacia", "Brasil"],
  finalists: ["Francia", "Brasil"],

  champion: "Francia",
  runnerUp: "Brasil",
  thirdPlaceWinner: "España",

  // 5 categorías divertidas — todas son una sola elección por categoría.
  // "topScorer", "topAssister" y "goldenGlove" esperan el NOMBRE de un jugador
  //   (de los listados en AWARD_PLAYERS dentro de app.js).
  // "topScoringTeam" y "mostConcededTeam" esperan el NOMBRE de una selección
  //   (tal y como aparece en los grupos).
  awards: {
    topScorer: "Kylian Mbappé",
    topAssister: "Bruno Fernandes",
    goldenGlove: "Mike Maignan",
    topScoringTeam: "Francia",
    mostConcededTeam: "Nueva Zelanda"
  }
};
