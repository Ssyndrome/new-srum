function trans(str){
    let arr = str.split(' ');
    let res = [];
    let ile = 0;
    arr.map((item) => {
        ile = val.length;
       res.push(val.charAt(0).toUpperCase().concat(val.slice(1,ile).toLowerCase()));
    });
    return `将原字符串"${str}"转化为"${res.join(' ')}"。`;
}
console.log(trans("i am a teacher."));
console.log(trans("i aM a teaCHer."));