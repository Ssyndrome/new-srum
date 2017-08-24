function left_pad(cur, num, str) {
    if(cur.length === num){
        return cur;
    }else if(cur.length > num){
        return `ERROR!Your string is out of control!`
    }
    while(cur.length < num){
        cur = str.concat(cur);
    }
    if(cur.length > num){
        cur = cur.substr(cur.length - num, num)
    }
    return cur;
}
console.log(left_pad('jello', 20, '1').length);
console.log(left_pad('uknow', 11, 'hello'));
/**
 * ("uknow", 11, "hello")
 * hellohellouknow
 *
 *
 */