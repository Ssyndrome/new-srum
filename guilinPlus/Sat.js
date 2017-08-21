function main(str) {
    for(let i = 1;i <= 20;i++){
        if(str.indexOf(i.toString()) === -1){
            return i;
        }
    }
}

console.log(main("19201234567891011121314151618"))