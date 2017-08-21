function main(arr) {
    let map = new Map();
    arr.map(key=>{map.set(key,key.split('').sort())});

    let eq = [];
    map.forEach(item => {
        if(!eq.some(i => {return isEq(i, item);})){
            eq.push(item);
        }
    });

    let ang = [];
    let res = [];
    for(let i = 0, j = eq.length; i < j; i ++){
        Array.from(map).forEach(item => {
            if(isEq(item[1],eq[i])){
                ang.push(item[0]);
            }
        });
        res.push(ang.sort());
        //console.log(ang);
        ang = [];

    }
    return res;
}

console.log(main(["eat", "tea", "tan", "ate", "nat", "bat"]));

//判断两个数组相等
function isEq(collectionA, collectionB) {
    collectionA.sort();collectionB.sort();
    for(let i = 0; i < collectionA.length; i ++){
        if(collectionA[i] !== collectionB[i]){
            return false;
        }
    }
    return true;
}