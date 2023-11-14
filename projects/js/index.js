let string = '10202030405'
let counter = 0
let null_pos = 0
for (let i = 0; i < string.length; i++) {
    if (string[i] == '0') {
        counter++
        null_pos = i
    }
    if (counter == 3)
        break;
}
console.log(null_pos)   