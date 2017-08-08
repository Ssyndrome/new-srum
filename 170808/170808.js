function f1(num){
    let i = 2;
    let init = num;
    let res = [];
    while(i <= num){
        if(num%i === 0){
            res.push(i);
            num /= i;
        }else{
            i++;
        }
    }
    return `${init} = ${(res+'')}`;
}
console.log(f1(90));