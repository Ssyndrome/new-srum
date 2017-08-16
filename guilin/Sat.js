var moment = require(`moment`);
function isAdult(birth) {
    let cr = moment().format("YYYYMMDD");
    let br =  birth.split('-').join('');
    return `出生于${birth}的人是否有18岁？${(cr-br)>180000}。`;
}
console.log(isAdult("1997-09-09"));