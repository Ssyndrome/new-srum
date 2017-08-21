function main(str) {
    return str.split('_').map(value=>{return value[0].toUpperCase()+value.replace(value[0],'')}).join('');
}
console.log(main('re_de_yuuu'));