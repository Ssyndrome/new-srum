function getN(num){
    let arr = [0,1];

    if(num === 1){return 0;}
    if(num === 2){return 1;}

    for(let i = 2;i < num+1;i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    return `裴波拉契数列的第${num}个数是${arr[num-1]}`;
}
console.log(getN(10));
