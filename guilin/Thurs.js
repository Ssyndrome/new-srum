function main(m, n) {
    let m_arr = [];
    let n_arr = [];
    for(let i = 2;i < m;i++){m % i=== 0?m_arr.push(i):m_arr;}
    for(let i = 2;i < n;i++){n % i=== 0?n_arr.push(i):n_arr;}

    let eq = [];
    m_arr.filter((i_m) => {
        n_arr.filter((i_n) => {
            i_n === i_m?eq.push(i_n):eq;
        });
    });

    let GCD;
    eq.length === 0?GCD = 1:GCD = Math.min.apply(null,eq);
    let LCM = (eq.reduce((cur,i) => {return cur/i;},m))*(eq.reduce((cur,i) => {return cur/i;},n))*(eq.reduce((cur,i) => {return cur*i;},1));
    return `${m}、${n}两个数的最大公约数为${GCD}，最小公倍数为${LCM}。`;
}
console.log(main(10,6));
console.log(main(5,7));

/*
* 10         6
* 2 5        2,3
* 最小公倍数 2
* 除以最小公倍数 还剩的数相乘 再乘以公倍数之积
* */