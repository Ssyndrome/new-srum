function test(str) {
    let re_str = str.toLowerCase().split("").reverse().join("");
    return `字符串${str}是回文嘛？${re_str === str.toLowerCase()}。`;
}
console.log(test("rere"));
console.log(test("rer"));