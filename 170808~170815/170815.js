function main(arr, item) {
    let res = 0;
    arr.forEach((i) => {
        if(i === item){
            res++;
        }
    });
    return `数组${arr}中${item}出现的次数是${res}次。`;
}
console.log(main([1,2,3,1],1));
console.log(main([4,5,2,3],1));