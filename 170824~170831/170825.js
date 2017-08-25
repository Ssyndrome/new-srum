function main(arr, target) {
    let res = [];
    let res_ta = arr.filter(val=>{
        if(val !== target){
            return val;
        }else{
            res.push(val);
        }
    });
    return [...res_ta,...res]
}
console.log(main([0,1,0,3,2], 0));