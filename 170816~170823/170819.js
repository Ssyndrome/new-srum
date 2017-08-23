function main(arr) {
    let res = [];
    arr.map((item) => {
        if(!res.includes(item)){
            res.push(item);
        }
    });
    return res;
}

console.log(main([1,1,1,2,3,3]));
