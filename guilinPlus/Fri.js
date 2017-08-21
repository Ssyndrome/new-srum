function main(arr) {
    arr = arr.map(value => {return value.toString();});
    return arr.sort((a, b) => {return b-a;}).sort((a, b) => {return Number(b.slice(0,1))-Number(a.slice(0,1));}).join('');
}
console.log(main([2, 32, 34, 3, 12]));