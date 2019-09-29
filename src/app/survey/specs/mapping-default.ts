// Default mapping
export const mapping = new Map<string, {
gid: number,
qid: number,
answers?: Map<string, string>
}>([
    ["QF1", {
        gid: 3,
        qid: 23,
        answers: new Map([
            ["at", "A1"],
            ["fr", "A2"],
            ["de", "A3"],
            ["it", "A4"],
            ["fl", "A5"],
            ["slo", "A6"],
            ["ch", "A7"]
        ])
    }],
    ["QF2FD", {
        gid: 3,
        qid: 24
    }],
    ["QF2AR", {
        gid: 3,
        qid: 25
    }],
    ["QF2AR2", {
        gid: 3,
        qid: 28
    }],
    ["QF2FD10", {
        gid: 3,
        qid: 27
    }],
    ["QF2FD13", {
        gid: 3,
        qid: 29
    }],
    ["QF2GB", {
        gid: 3,
        qid: 26
    }],
    ["QF2GB2", {
        gid: 3,
        qid: 73
    }],
    ["QF2GB2EB", {
        gid: 3,
        qid: 74
    }],
    ["QFSW1", {
        gid: 3,
        qid: 30
    }],
    ["QF2IT", {
        gid: 3,
        qid: 75
    }],
    ["QF2ITUTI", {
        gid: 3,
        qid: 76
    }],
    ["QF2SL", {
        gid: 3,
        qid: 77
    }],
    ["QF2SL7", {
        gid: 3,
        qid: 78
    }],
    ["QF3", {
        gid: 3,
        qid: 80
    }],
    ["EQ1AU", {
        gid: 4,
        qid: 31,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["EQ1GE", {
        gid: 4,
        qid: 33,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["EQ1FR", {
        gid: 4,
        qid: 32,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["EQ1IT", {
        gid: 4,
        qid: 34,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["EQ1SL", {
        gid: 4,
        qid: 35,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["EQ1SW1", {
        gid: 4,
        qid: 36,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["EQ1SW2", {
        gid: 4,
        qid: 37,
        answers: new Map([
            ["1", "SQ001"],
            ["2", "SQ002"],
            ["3", "SQ003"],
            ["4", "SQ004"],
            ["5", "SQ005"]
        ])
    }],
    ["Q1TRAIN", {
        gid: 5,
        qid: 39
    }],
    ["Q1CAR", {
        gid: 5,
        qid: 40
    }],
    ["Q1PT", {
        gid: 5,
        qid: 41
    }],
    ["Q1BIKE", {
        gid: 5,
        qid: 42
    }],
    ["Q1WALK", {
        gid: 5,
        qid: 43
    }],
    ["Q1MOTORB", {
        gid: 5,
        qid: 44
    }]
]);
