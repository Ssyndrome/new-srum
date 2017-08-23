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
//console.log(main([1,2,2,2,3],[2,2,3,3,3,4]))


function main2(collectionA, collectionB) {
    let b = new Set(collectionB.map(B=>{return B;}));
    return new Set(collectionA.filter(A=>{return b.has(A)}));
}

//console.log(main2([1,1,1,2,2,3,3,4], [1,2,2,3,6,67,7]));

function main3(collectionA, collectionB) {


    for(let A of collectionA){
        for(let B of collectionB){
            if(A === B){
                //return main3(collectionA[],collectionB[]);
            }
        }

    }
    return false;
}

console.log(main3([4,3,7,8,5,4], [5,8,4,3,7,1,7]))

let a = [1,1,1,1,2,3,3,3,3]
//return main3(collectionA.slice(index+1, collectionA.length), collectionB.slice(collectionB.indexOf(A)+1,collectionB.length));
//console.log(a.slice(a.indexOf(2)+1, a.length));


