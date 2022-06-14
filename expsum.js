exports.sum = (a,b) => {
    return a+b;
}
exports.tri = (a,b,c) => {
    a = b+c;
    b=a+c;
    c=a+b+c;
    return c;
}
// module.exports = {
//     sum
// }