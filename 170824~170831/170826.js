function main(Num){
    let i = 1;
    let res = "";

    while(Num){
        if(i%3 === 0){
            if(i%5 === 0){
                res += `
fizz buzz`;
            }else{
                res += `
fizz`;
            }
        }else if(i%5 === 0){
            res += `
buzz`;
        }else{
            res += "\n"+i.toString();
        }
        i++;
        Num --;
    }

    return res;
}

console.log(main(15));