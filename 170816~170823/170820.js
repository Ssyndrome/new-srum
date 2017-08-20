function main(str) {
    let str_max = '';
    let num = 0;
    let res = {};
    let arr = str.split('');
    arr.map((item) => {
        if(res[item]){
            res[item] ++;
        }else{
            res[item] = 1;
        }
    });

    for(let i in res){
        if(res[i] >= num){
            num = res[i];
            str_max += i;
            for(let j = 0;j < str_max.length;j ++){
                if(res[str_max[j]] < num){
                    str_max = str_max.replace(str_max[j],'');
                }
            }
        }
    }
    return str_max.split('').map((even) => {
        return `${even}:${num}`;
    });
    //return str_max+ `:` + num;

}

console.log(main('aabbccddd'));