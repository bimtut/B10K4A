let kamus = '0123456789abcdefghijklmnopqrstuvwxyz'

function cetakKarakter(row) {
    let temp = []
    if (typeof row != 'number') {
        return 'parameter harus berisi angka !!'
    }
    for (let i = 0; i < row; i++) {
        let penampungan = ''
        for (let j = 0; j < 32; j++) {
            penampungan += kamus[Math.floor(Math.random() * 36)]
        }
        temp.push(penampungan)
    }
    return temp
}

function validasi(row) {
    let cetak = cetakKarakter(row)
    if (typeof cetak === 'string') {
        return cetak
    } else if (typeof cetak === 'object') {
        for (let k = 0; k < cetak.length; k++) {
            for (let l = k+1; l < cetak.length; l++) {
                if (cetak[k] === cetak[l]) {
                    let penampunganDalam = ''
                    for (let j = 0; j < 32; j++) {
                        penampunganDalam += kamus[Math.floor(Math.random() * 36)]
                    }
                    cetak[l] = penampunganDalam
                } 
            }
        }
        return cetak
    }
}

// test case
console.log(validasi(10))
