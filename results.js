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
    A: ["México", "Corea del Sur", "República Checa", "Sudáfrica"],
    B: ["Suiza", "Canadá", "Bosnia y Herzegovina", "Catar"],
    C: ["Brasil", "Marruecos", "Escocia", "Haití"],
    D: ["Estados Unidos", "Turquía", "Paraguay", "Australia"],
    E: ["Alemania", "Ecuador", "Costa de Marfil", "Curazao"],
    F: ["Países Bajos", "Japón", "Suecia", "Túnez"],
    G: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
    H: ["España", "Uruguay", "Arabia Saudí", "Cabo Verde"],
    I: ["Francia", "Senegal", "Noruega", "Irak"],
    J: ["Argentina", "Austria", "Argelia", "Jordania"],
    K: ["Portugal", "Colombia", "Uzbekistán", "RD del Congo"],
    L: ["Inglaterra", "Croacia", "Ghana", "Panamá"]
  },

  // Los 8 mejores terceros que clasifican a dieciseisavos,
  // en orden (1º mejor tercero → 8º mejor tercero).
  thirdPlace: [
    "Noruega",
    "Suecia",
    "Escocia",
    "Paraguay",
    "Bosnia y Herzegovina",
    "Argelia",
    "Ghana",
    "Arabia Saudí"
  ],

  // Quiniela 1X2 — resultados reales de los 3 partidos fijos.
  // Valores admitidos: "1" (gana team1), "X" (empate), "2" (gana team2).
  // Las claves coinciden con `[team1, team2].sort().join('__')` definido en
  // QUINIELA_1X2_MATCHES dentro de app.js. Dejar "" mientras el partido no
  // se haya jugado.
  quiniela1x2: {
    "Mexico__South Korea": "1",
    "Morocco__Scotland":   "2",
    "Spain__Uruguay":      "2"
  },

  knockout: {
    round32: [
      "Canadá",
      "Alemania",
      "Países Bajos",
      "Brasil",
      "Francia",
      "Senegal",
      "México",
      "Inglaterra",
      "Estados Unidos",
      "Bélgica",
      "Croacia",
      "España",
      "Suiza",
      "Argentina",
      "Portugal",
      "Turquía"
    ],
    round16: [
      "Países Bajos",
      "Francia",
      "Brasil",
      "Inglaterra",
      "España",
      "Bélgica",
      "Argentina",
      "Portugal"
    ],
    quarterfinals: [
      "Francia",
      "España",
      "Brasil",
      "Argentina"
    ],
    semifinals: [
      "Francia",
      "España",
      "Brasil",
      "Argentina"
    ],

    champion: "Argentina",
    runnerUp: "Francia",
    finalists: ["Argentina", "Francia"],

    thirdPlaceWinner: "Brasil",
    final: "Argentina",
    thirdPlace: "Brasil",

    matches: {
      round32: [
        { match: 73, team1: "Corea del Sur", team2: "Canadá", winner: "Canadá" },
        { match: 74, team1: "Alemania", team2: "Paraguay", winner: "Alemania" },
        { match: 75, team1: "Países Bajos", team2: "Marruecos", winner: "Países Bajos" },
        { match: 76, team1: "Brasil", team2: "Japón", winner: "Brasil" },
        { match: 77, team1: "Francia", team2: "Suecia", winner: "Francia" },
        { match: 78, team1: "Ecuador", team2: "Senegal", winner: "Senegal" },
        { match: 79, team1: "México", team2: "Escocia", winner: "México" },
        { match: 80, team1: "Inglaterra", team2: "Noruega", winner: "Inglaterra" },
        { match: 81, team1: "Estados Unidos", team2: "Bosnia y Herzegovina", winner: "Estados Unidos" },
        { match: 82, team1: "Bélgica", team2: "Arabia Saudí", winner: "Bélgica" },
        { match: 83, team1: "Colombia", team2: "Croacia", winner: "Croacia" },
        { match: 84, team1: "España", team2: "Austria", winner: "España" },
        { match: 85, team1: "Suiza", team2: "Argelia", winner: "Suiza" },
        { match: 86, team1: "Argentina", team2: "Uruguay", winner: "Argentina" },
        { match: 87, team1: "Portugal", team2: "Ghana", winner: "Portugal" },
        { match: 88, team1: "Turquía", team2: "Egipto", winner: "Turquía" }
      ],
      round16: [
        { match: 89, team1: "Canadá", team2: "Países Bajos", winner: "Países Bajos" },
        { match: 90, team1: "Alemania", team2: "Francia", winner: "Francia" },
        { match: 91, team1: "Brasil", team2: "Senegal", winner: "Brasil" },
        { match: 92, team1: "México", team2: "Inglaterra", winner: "Inglaterra" },
        { match: 93, team1: "Croacia", team2: "España", winner: "España" },
        { match: 94, team1: "Estados Unidos", team2: "Bélgica", winner: "Bélgica" },
        { match: 95, team1: "Argentina", team2: "Turquía", winner: "Argentina" },
        { match: 96, team1: "Suiza", team2: "Portugal", winner: "Portugal" }
      ],
      quarterfinals: [
        { match: 97, team1: "Países Bajos", team2: "Francia", winner: "Francia" },
        { match: 98, team1: "España", team2: "Bélgica", winner: "España" },
        { match: 99, team1: "Brasil", team2: "Inglaterra", winner: "Brasil" },
        { match: 100, team1: "Argentina", team2: "Portugal", winner: "Argentina" }
      ],
      semifinals: [
        { match: 101, team1: "Francia", team2: "España", winner: "Francia" },
        { match: 102, team1: "Brasil", team2: "Argentina", winner: "Argentina" }
      ],
      thirdPlace: [
        { match: 103, team1: "España", team2: "Brasil", winner: "Brasil" }
      ],
      final: [
        { match: 104, team1: "Francia", team2: "Argentina", winner: "Argentina" }
      ]
    }
  },

  semifinalists: ["Francia", "España", "Brasil", "Argentina"],
  finalists: ["Argentina", "Francia"],

  champion: "Argentina",
  runnerUp: "Francia",
  thirdPlaceWinner: "Brasil",

  // 5 categorías divertidas — todas son una sola elección por categoría.
  // "topScorer", "topAssister" y "goldenGlove" esperan el NOMBRE de un jugador
  //   (de los listados en AWARD_PLAYERS dentro de app.js).
  // "topScoringTeam" y "mostConcededTeam" esperan el NOMBRE de una selección
  //   (tal y como aparece en los grupos).
  awards: {
    topScorer: "Kylian Mbappé",
    topAssister: "Bruno Fernandes",
    goldenGlove: "Mike Maignan",
    topScoringTeam: "Argentina",
    mostConcededTeam: "Haití"
  }
};
