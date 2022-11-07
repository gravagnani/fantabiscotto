const matches = [
  {
    id: 1,
    name: "First Round",
    nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 2,
    name: "First Round",
    nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 3,
    name: "First Round",
    nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 4,
    name: "First Round",
    nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 5,
    name: "First Round",
    nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 6,
    name: "First Round",
    nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "",
        biscuits: "",
      },
    ],
  },
  {
    id: 7,
    name: "First Round",
    nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
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
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
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
