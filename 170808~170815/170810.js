function findNum(arr){
    arr.sort((a,b) => {
        if(a>b){return 1;}
        if(a=b){return 0;}
        if(a<b){return -1;}
    });
    let res = arr[0];arr.shift();
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === res){
            res = arr[i+1];
            arr.splice(i,i+1);
        }else{
            return res;
        }
    }
}
console.log(findNum([1,1,3,2,3]));