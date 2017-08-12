function print(){
    let res = [];
    let g,s,b;
    for(let i = 100;i<1000;i++){
        g = parseInt(i%10);
        s = parseInt((i%100)/10);
        b = parseInt(i/100);
        if(i === g*g*g + s*s*s + b*b*b){
            res.push(i);
        }
    }
    return `所有的水仙花数为${res}`;
}
console.log(print());