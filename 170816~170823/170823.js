function trans(arr) {
    return (arr+'').split(',').map(val=>{return Number(val);});
}
console.log(trans([1,[2,[3,[4]]]]));
