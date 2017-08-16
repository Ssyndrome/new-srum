function main(arr) {
    let res = [];
    let RES = [];
    arr.forEach((val) => {
        if(res.indexOf(val) === -1){
            res.push(val);
        }else{
            RES.push(val);
        }
    });
    let remove = [];
    RES.forEach((val) => {
        if(remove.indexOf(val) === -1){
            remove.push(val);
        }
    });
    return `数组[${arr}]中重复的数字有${remove}。`;
}
console.log(main([1,3,3,3,3]));