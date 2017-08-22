function main(collectionA, collectionB) {
    let a = new Set(collectionA.filter(A=>{return A}));
    let b = new Set(collectionB.filter(B=>{return B}));
    return new Set([...a].filter(x => b.has(x)));
}
console.log(main([1,2,2,2,3],[2,3,3,3,4]))
