var moment = require(`moment`);
function isAdult(birth) {
    let cr = moment().format("YYYY-MM-DD").split('-');
    let br =  birth.split('-');
    for(let i = 3;i > 0;i++){
        cr[i]
    }
}
console.log(isAdult("1997-09-09"));