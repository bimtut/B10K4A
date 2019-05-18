let biodata = `{
        "name": "Bima Ketut Ramuna Putra",
        "address": "Jalan Yos Sudarso 142 Tulungagung, Jawa Timur", 
        "hobbies": ["berenang", "ngoding", "baca", "game"],
        "is_married": false,
        "school": {
            "highSchool": "SMA Boyolangu",
            "university": "Telkom University"
        },
        "skills": [
            {"name": "teaching", "score": 8},
            {"name": "programming", "score": 7},
            {"name": "persistent", "score": 8}
        ]
    }`
    
function parseData(input) {
    let data = JSON.parse(input)
    return data
}

console.log(parseData(biodata))