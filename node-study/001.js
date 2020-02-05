// console.log(typeof module); // object
// console.log(module);

let name = '乔峰';
module.exports.name = name;
module.exports.say = function(){
    console.log('好好学习 天天向上');
}
console.log('--------');
console.log(typeof module); // object
console.log(module);
console.log(module.exports);
console.log(exports);
console.log(module.exports === exports);  // true