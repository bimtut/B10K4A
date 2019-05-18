function cetakGambar(length) {
    if (length % 2 === 1) {
        for (let i = 0; i < length; i++) {
            let text = []
            for (let j = 0; j < length; j++) {
                if (j == i || j == length-1-i) {
                    text[j] = 'x'
                } else {
                    text[j] = '='
                }
            }
            text = text.join('')
            
            console.log(text)
        }
    } else {
        console.log('perintah tidak dapat dilaksanakan !\nparameter harus angka ganjil')
    }
}


// test case
cetakGambar(7)

