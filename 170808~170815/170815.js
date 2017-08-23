function main(arr, item) {
    let res = 0;
    arr.forEach((i) => {
        if(i === val){
            res++;
        }
    });
    return `数组${arr}中${val}出现的次数是${res}次。`;
}

function main2(arr, item){
    return arr.reduce((cur,i) => {i === val?cur++:cur;return cur;}, 0);
}
console.log(main2([1,2,3,1],1));
//console.log(main([4,5,2,3],1));