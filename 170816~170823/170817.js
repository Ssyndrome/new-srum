function main(arr) {
    let res = arr.map((item) => {return item*item;});
    return `数组[${arr}]的二次方数组是[${res}]。`;
}
console.log(main([1,2,4,5]));