function convert(Num) {
    let res = [];
    if(Num<10){
        return String.fromCharCode(Num + 64);
    }else{
        return `${String.fromCharCode(Num + 64)}、${String.fromCharCode(Num%10 + 64)}${String.fromCharCode(parseInt(Num/10) + 64)}`
    }
}

console.log(convert(11));