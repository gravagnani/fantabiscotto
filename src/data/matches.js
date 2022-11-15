import participants from "./participants";

let match_participants = [];

participants.forEach((p) => {
  match_participants[p.id] = p;
});

const matches = [
  {
    id: 0,
    name: "First Round",
    nextMatchId: 16, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: null,
        biscuits: null,
      },
      {
        resultText: null,
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[26].name,
        biscuits: match_participants[26].biscuit,
      },
    ],
  },
  {
    id: 1,
    name: "First Round",
    nextMatchId: 16, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[22].name,
        biscuits: match_participants[22].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[14].name,
        biscuits: match_participants[14].biscuit,
      },
    ],
  },
  {
    id: 2,
    name: "First Round",
    nextMatchId: 17, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[18].name,
        biscuits: match_participants[18].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[16].name,
        biscuits: match_participants[16].biscuit,
      },
    ],
  },
  {
    id: 3,
    name: "First Round",
    nextMatchId: 17, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[2].name,
        biscuits: match_participants[2].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[5].name,
        biscuits: match_participants[5].biscuit,
      },
    ],
  },
  {
    id: 4,
    name: "First Round",
    nextMatchId: 18, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[7].name,
        biscuits: match_participants[7].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[1].name,
        biscuits: match_participants[1].biscuit,
      },
    ],
  },
  {
    id: 5,
    name: "First Round",
    nextMatchId: 18, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[4].name,
        biscuits: match_participants[4].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[8].name,
        biscuits: match_participants[8].biscuit,
      },
    ],
  },
  {
    id: 6,
    name: "First Round",
    nextMatchId: 19, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[13].name,
        biscuits: match_participants[13].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[17].name,
        biscuits: match_participants[17].biscuit,
      },
    ],
  },
  {
    id: 7,
    name: "First Round",
    nextMatchId: 19, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[12].name,
        biscuits: match_participants[12].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[15].name,
        biscuits: match_participants[15].biscuit,
      },
    ],
  },
  {
    id: 8,
    name: "First Round",
    nextMatchId: 20, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: null,
        biscuits: null,
      },
      {
        resultText: null,
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[3].name,
        biscuits: match_participants[3].biscuit,
      },
    ],
  },
  {
    id: 9,
    name: "First Round",
    nextMatchId: 20, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[30].name,
        biscuits: match_participants[30].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[19].name,
        biscuits: match_participants[19].biscuit,
      },
    ],
  },
  {
    id: 10,
    name: "First Round",
    nextMatchId: 21, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[6].name,
        biscuits: match_participants[6].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[11].name,
        biscuits: match_participants[11].biscuit,
      },
    ],
  },
  {
    id: 11,
    name: "First Round",
    nextMatchId: 21, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[20].name,
        biscuits: match_participants[20].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[21].name,
        biscuits: match_participants[21].biscuit,
      },
    ],
  },
  {
    id: 12,
    name: "First Round",
    nextMatchId: 22, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[23].name,
        biscuits: match_participants[23].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[25].name,
        biscuits: match_participants[25].biscuit,
      },
    ],
  },
  {
    id: 13,
    name: "First Round",
    nextMatchId: 22, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[10].name,
        biscuits: match_participants[10].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[24].name,
        biscuits: match_participants[24].biscuit,
      },
    ],
  },
  {
    id: 14,
    name: "First Round",
    nextMatchId: 23, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[28].name,
        biscuits: match_participants[28].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[9].name,
        biscuits: match_participants[9].biscuit,
      },
    ],
  },
  {
    id: 15,
    name: "First Round",
    nextMatchId: 23, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[27].name,
        biscuits: match_participants[27].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: match_participants[29].name,
        biscuits: match_participants[29].biscuit,
      },
    ],
  },
  // SECONDO TURNO
  {
    id: 16,
    name: "Second Round",
    nextMatchId: 24, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[26].name,
        biscuits: match_participants[26].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 17,
    name: "Second Round",
    nextMatchId: 24, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 18,
    name: "Second Round",
    nextMatchId: 25, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 19,
    name: "Second Round",
    nextMatchId: 25, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 20,
    name: "Second Round",
    nextMatchId: 26, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: match_participants[3].name,
        biscuits: match_participants[3].biscuit,
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 21,
    name: "Second Round",
    nextMatchId: 26, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 22,
    name: "Second Round",
    nextMatchId: 27, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 23,
    name: "Second Round",
    nextMatchId: 27, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  // TERZO ROUND
  {
    id: 24,
    name: "Third Round",
    nextMatchId: 28, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "3", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 25,
    name: "Third Round",
    nextMatchId: 28, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "3", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 26,
    name: "Third Round",
    nextMatchId: 29, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "3", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 27,
    name: "Third Round",
    nextMatchId: 29, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "3", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  // QUARTO ROUND
  {
    id: 28,
    name: "Fourth Round",
    nextMatchId: 30, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "4", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 29,
    name: "Fourth Round",
    nextMatchId: 30, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "4", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  // QUINTO ROUND
  {
    id: 30,
    name: "Fifth Round",
    nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "5", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        resultText: null, // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "",
        biscuits: "",
      },
      {
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
];

/*
  {
    id: 260005,
    name: "Final - Match",
    nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "4", // Text for Round Header
    startTime: "2021-05-30",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc", // Unique identifier of any kind
        resultText: "WON", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "giacomo123",
        biscuits: "Gocciole",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Ant",
        biscuits: "Gocciole",
      },
    ],
  },
*/

export default matches;
