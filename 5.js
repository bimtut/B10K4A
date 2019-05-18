function trim(arr) {
    let min = arr[0], max = arr[0], indexMin = 0, indexMax = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            indexMin = i
        }
    }

    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            indexMax = i
        }
    }
    
    if (indexMin != 0) {
        arr.splice(0,indexMin)
    }
    return arr
}

function minmax(data) {
    let fix = trim(data)
    let min = data[0], max = data[0], arr = []
    
    for (let i=0; i<data.length; i++) {
        if (data[i] < min) {
            min = data[i]
        }
    }

    for (let i=0; i<data.length; i++) {
        if (data[i] > max) {
            max = data[i]
        }
    }

    arr.push(min)
    arr.push(max)
    console.log(arr)
}

// test case
let data = ['g','h', 'a', 'b', 'd', 'f']
let dataLain = ['a', 'd', 'c', 'b']
minmax(data)
minmax(dataLain)