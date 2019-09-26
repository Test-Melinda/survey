// Default mapping
export const mapping = new Map([
    ["FS_residence", {
        gid: 1,
        qid: 1,
        answers: new Map([
            ["at", "a1"],
            ["fr", "a2"],
            ["de", "a3"],
            ["it", "a4"],
            ["fl", "a5"],
            ["slo", "a6"],
            ["ch", "a7"]
        ])
    }],
    ["FS_region_de", {
        gid: 1,
        qid: 9,
        answers: new Map([
            ["bayern", "a1"]
        ])
    }],
    ["CS_activities", {
        gid: 2,
        qid: 10,
        answers: new Map([
            ["EQ_1", "SQ001"],
            ["EQ_2", "SQ002"],
            ["EQ_3", "SQ003"],
            ["EQ_4", "SQ004"],
            ["EQ_5", "SQ005"],
        ])
    }]
]);
