function getNewChain(str, val) {
    let numArr = str.split('->');
    let res = [];
    for(let i = 0, sl = numArr.length;i <sl;i++){
        if(numArr[i] != val){
            res.push(numArr[i]);
        }
    }
    return `原链表为：${str}。
需删除的数字为：${val}。
删除后得到：${res.join('->')}。`;
}
console.log(getNewChain("1->2->3->3->4->5->3",3));