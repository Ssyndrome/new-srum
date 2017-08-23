function main(str) {
    for(let i = 1;i <= 20;i++){
        if(str.indexOf(i.toString()) === -1){
            return i;
        }
    }

    if(str.length === 29){  //lose double
        while (str.indexOf(1) !== -1){
            str = str.replace(/1+\d/,'');
        }
        let i = 1, res = [];
        while (i < 10){
            if(str.indexOf(i) === -1){
                res.push(i);
            }
            i++;
        }
        return res.join('');
    }else if(str.length === 30){  //lose double

    }

}


let a = `1234`;a = a.replace(/1+\d/,'');//console.log(a);

//console.log(("19201234567891011121314151618").split(0,1))
//console.log(main("32456789101112114151617181920"))

function findLostNum(str) {
    let full = "1234567891011121314151617181920";
    let map = new Map();
    let res_map = new Map();

    let  i = 0;
    while (i < 10){
        map.set(i, count(full,i));
        res_map.set(i, count(str,i));
        i ++;
    }

    let res = new Map();
    Array.from(map).forEach(item=>{
        if(item[1] !== res_map.get(item[0])){
            res.set(item[0], item[1] - res_map.get(item[0]));
        }
    });

    let message = '';
    [...res].forEach(value=>{
        message+=value[0].toString();
    });
    console.log(res);
    return message;//[...res].reduce((cur, val)=>{cur += val[0].toString();}, '');
}

console.log(findLostNum("19201234567891011121314151618"));
function count(str, item) {
    return str.split(item).length-1;
}
