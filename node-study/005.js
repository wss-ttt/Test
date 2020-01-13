let person = {
    name:'乔峰',
    age:18,
    say(){
        console.log('aaaa');
    }
};
// 使用module.exports进行暴露接口
// module.exports = person;
// 使用exports进行暴露接口
exports.person = person;