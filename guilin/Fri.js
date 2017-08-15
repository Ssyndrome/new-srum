function jump(n) {
    if(n <= 0){return 0;}
    if(n === 1||n === 2){return n;}
    return (jump(n-1)+jump(n-2));
}
let n = 234;
console.log(`${n}层楼梯共有${jump(n)}种跳法。`);