function main(collectionA, collectionB) {
    let calA = new Map();
    let calB = new Map();
    let resObj = new Map();

    collectionA.sort((a, b)=>{return a-b;}).map(A=>{calA.set(A, calA.get(A)?calA.get(A)+1:1);});
    collectionB.sort((a, b)=>{return a-b;}).map(B=>{calB.set(B, calB.get(B)?calB.get(B)+1:1);});

    [...calA].forEach(A=>{
        [...calB].forEach(B=>{
            if(A[0] === B[0]){
                resObj.set(A[0],A[1]>B[1]?B[1]:A[1]);
            }
        });
    });

    let num = 0;
    let res_arr = [];
    [...resObj].map(res=>{
        num = res[1];
        while (num){
            res_arr.push(res[0]);
            num--;
        }
    });
    return res_arr;
}
console.log(main([1,2,2,2,3],[2,2,3,3,3,4]))
