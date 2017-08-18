function main(arr, item) {
    let res = [];
    arr.map((a,i) => {
        if(a === item){
            res.push(i);
        }
    });
    return res;
}
console.log(main([1,2,3,1],1));