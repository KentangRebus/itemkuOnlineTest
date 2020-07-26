// relation: 
/*[
    [“100”,”ryan”,”music”,”2”],
    [“200”,”apeach”,”math”,”2”],
    [“300”,”tube”,”computer”,”3”],
    [“400”,”con”,”computer”,”4”],
    [“500”,”muzi”,”music”,”3”],
    [“600”,”apeach”,”music”,”2”]
]
*/
// answer: 2

function solution(relation) {
    let answer = 0

    let solution = []
    let column = []
    for (let i = 0; i < relation[0].length; i++)
        column.push(i)
    let possibleSolution = combine(column, 1)

    for (let i = 0; i < possibleSolution.length; i++) {
        let toCheck = possibleSolution[i]
        // check if already a subset
        let j = 0
        for (; j < solution.length; j++) {
            // check array is a subset of another array
            if (solution[j].every(val => toCheck.includes(val)))
                j = solution.length + 1
        }
        if (j === solution.length) {
            let newData = []
            for (let k = 0; k < relation.length; k++) {
                let newRow = []
                for (let l = 0; l < toCheck.length; l++)
                    newRow.push(relation[k][toCheck[l]])
                newData.push(newRow)
            }
            if (!hasDuplicates(newData))
                solution.push(toCheck)
        }

    }
    answer = solution.length
    return answer
}

// find all possible subset combos
function combine(column, min) {
    let fn = function (n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got
            }
            return
        }
        for (let j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all)
        }
        return
    }
    let all = []
    for (let i = min; i < column.length; i++) {
        fn(i, column, [], all);
    }
    all.push(column);
    return all;
}

// check if array have duplicate value
function hasDuplicates(array) {
    let valuesSoFar = Object.create(null)
    for (let i = 0; i < array.length; ++i) {
        let value = array[i]
        if (value in valuesSoFar)
            return true
        valuesSoFar[value] = true
    }
    return false
}