// N: 5
// users: [2,1,2,6,2,4,3,3]
// answer: [3,4,2,1,5]
// 1/8 3/7 2/4 1/2 0/1 [Stage 1 2 3 4 5]

// [1 2 2 2 3 3 4 6]

function solution(N, users) {
    let answer = []

    let sortedStage = users.sort()
    let stageList = []
    let totalUser = users.length

    for (let i = 1; i <= N; i++) {
        stageList.push({
            'stage': i,
            'counter': 0,
            'percentage': 0
        })
    }

    for (let i = 0; i < sortedStage.length; i++) {
        if (sortedStage[i] <= N) {
            if (i != 0 && sortedStage[i] !== sortedStage[i - 1]) {
                console.log('total', totalUser, stageList[sortedStage[i - 1] - 1].counter)
                totalUser -= stageList[sortedStage[i - 1] - 1].counter
            }
            stageList[sortedStage[i] - 1].counter += 1
            stageList[sortedStage[i] - 1].percentage = stageList[sortedStage[i] - 1].counter / totalUser
        }
    }

    stageList.sort((prev, next) => {
        return next.percentage - prev.percentage
    })

    stageList.forEach(e => {
        answer.push(e.stage)
    })

    return answer
}