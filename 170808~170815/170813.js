function getMedia(arr){
    const init = arr;
    console.log(`数组${init}的中位数为`);
    let res,res_num;
    arr.sort((a, b) => {
        if(a>b){return 1;}
        if(a=b){return 0;}
        if(a<b){return -1;}
    });
    if(arr.length%2 === 0){
        res = parseInt(arr.length/2)-1;
        res_num = (arr[res]+arr[res+1])/2
    }else{
        res = parseInt(arr.length/2);
        res_num = arr[res];
    }
    return`${res_num}。`;
}

console.log(getMedia([8,7,6,5,0,3]));