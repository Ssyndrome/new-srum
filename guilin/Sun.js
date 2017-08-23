function main(arr) {
    let res = {};let val_arr = [];
    let NEW = arr.map((a) => {return a.toString();});
   NEW.forEach((val) => {
        if(res[val]){
            res[val] ++;
        }else{
            res[val] = 1;
            val_arr.push(val);
        }
    });
   for(let i = 0;i < val_arr.length;i ++){
       if(res[val_arr[i]]%2 !== 0){
           return `[${arr}]数组中奇数个的数为${val_arr[i]}。`;
       }
   }
}

function main2(arr) {
    let res = arr[0];
    for(let i = 1;i < arr.length;i++){
        res = res^(arr[i]);
    }
    return res;
}
console.log(1^3^1);