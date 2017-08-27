function convert(Num) {
    if(Num <= 0){
        return ``;
    }
    if(Num<10){
        return String.fromCharCode(Num + 64);
    }
    if(Num<26){
        return ` ${String.fromCharCode(Num + 64)}-or-${String.fromCharCode(parseInt(Num/10) + 64)}、${String.fromCharCode(Num%10 + 64)} `;
    }
    if(Num.toString().slice(0,1)>2){
        return `${String.fromCharCode(Number(Num.toString().slice(0,1))+64)} ${convert(Number(Num.toString().slice(1,Num.toString().length)))}`
    }
    return `${String.fromCharCode(Number(Num.toString().slice(0,1))+64)} ${convert(Number(Num.toString().slice(1,Num.toString().length)))} or ${String.fromCharCode(Number(Num.toString().slice(0,2))+64)} ${convert(Number(Num.toString().slice(2,Num.toString().length)))}`;
}
console.log(convert(122));

/*
* 12345
* ABCDF
* F CDF
*
*54321
* */