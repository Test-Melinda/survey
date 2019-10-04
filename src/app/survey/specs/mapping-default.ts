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
        qid: 31
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
        qid: 32
    }],
    ["EQ1IT", {
        gid: 4,
        qid: 34
    }],
    ["EQ1SL", {
        gid: 4,
        qid: 35
    }],
    ["EQ1SW1", {
        gid: 4,
        qid: 36
    }],
    ["EQ1SW2", {
        gid: 4,
        qid: 37
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
    }],
    ["Q2", {
        gid: 6,
        qid: 45
    }],
    ["Q3", {
        gid: 7,
        qid: 46
    }],
    ["Q4", {
        gid: 8,
        qid: 47
    }],
    ["Q5", {
        gid: 8,
        qid: 48
    }],
    ["Q6dot1IT", {
        gid: 9,
        qid: 50
    }],
    ["Q6dot1AU", {
        gid: 9,
        qid: 51
    }],
    ["Q6dot1SL", {
        gid: 9,
        qid: 52
    }],
    ["Q6dot1SW", {
        gid: 9,
        qid: 53
    }],
    ["Q6dot1FR", {
        gid: 9,
        qid: 54
    }],
    ["Q6dot1GE", {
        gid: 9,
        qid: 55
    }],
    ["Q6dot2", {
        gid: 10,
        qid: 56
    }],
    ["Q6dot3", {
        gid: 11,
        qid: 57
    }],
    ["Q7", {
        gid: 12,
        qid: 58
    }],
    ["Q8", {
        gid: 13,
        qid: 59
    }],
    ["Q9", {
        gid: 14,
        qid: 60
    }],
    ["Q10", {
        gid: 15,
        qid: 62
    }],
    ["Q11", {
        gid: 15,
        qid: 63
    }],
    ["Q12", {
        gid: 15,
        qid: 64
    }],
    ["Q15", {
        gid: 15,
        qid: 65
    }],
    ["Q13", {
        gid: 16,
        qid: 66
    }],
    ["Q13bis", {
        gid: 17,
        qid: 67
    }],
    ["Q14", {
        gid: 18,
        qid: 68
    }],
    ["Q14CARS", {
        gid: 18,
        qid: 69
    }],
    ["Q14MOTOR", {
        gid: 18,
        qid: 70
    }],
    ["Q14BIKES", {
        gid: 18,
        qid: 71
    }],
    ["Q14SCOOT", {
        gid: 18,
        qid: 72
    }],
    ["MA", {
        gid: 19,
        qid: 79
    }]
]);
