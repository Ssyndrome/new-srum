function main(N) {
    let arr = [1,2,3,5], res = [];
    let i = 1;
    while(i < N){
        arr.map(value => {res.push(value, value*2, value*3, value*5);});
        arr = removeCm(res.sort((a,b) => {return a-b;}));
        i ++;
    }
    return arr[N-1];
}

console.log(main(7));

function removeCm(arr) {
    let res = [];
    return arr.filter((item) => {
        if(res.indexOf(item) === -1){
            res.push(item);
            return item;
        }
    });
}
