function count(text, target) {
    let result = 0
    for (let i=0; i<text.length; i++) {
        if (text[i] === target) {
            result++
        }
    }
    return console.log(result)
}

// test case
count ("bootcamp", "o")
// Akan diperoleh result: 2
count ('arkademy', 'k')
// Akan diperoleh result: 1
