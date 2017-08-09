var f1 = require(`./170808.js`);
describe("170808-将一个正整数分解质因数" ()=>{

    it(("将90分解成2,3,3,5:") => {
        const result = f1(90);
        expect(result).toEqual("90 = 2,3,3,5");
    });

});