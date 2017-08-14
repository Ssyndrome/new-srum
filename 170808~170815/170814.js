function main(k) {
    let arr = [3,5,7];
    let res = [];
    let i = 0;
    while(arr[k] == undefined){
        arr.push(arr[i]*3);arr.push(arr[i]*5);arr.push(arr[i]*7);
        arr.push(arr[i+1]*3);arr.push(arr[i+1]*5);arr.push(arr[i+1]*7);
        arr.push(arr[i+2]*3);arr.push(arr[i+2]*5);arr.push(arr[i+2]*7);

        arr.sort((a,b) => {
            if(a>b){return 1;}
            if(a==b){return 0;}
            if(a<b){return -1;}
        });
        res = removeDuplicatedItem(arr);
        i += 3;
    }

    return `只含素因子3、5、7的第${k}大的数为${res[k-1]}。`;
}

function removeDuplicatedItem(arr) {
    var res = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(main(5));