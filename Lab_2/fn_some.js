Array.prototype.mySome = function(callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return true;
        }
    }
    return false;
};
var a = [1, 2, 3, 10, 14, 17];
console.log(
    a.mySome((arr) => {
        return arr > 10;
    })
);
var a = [1, 2, 3, 10, 14, 17];
console.log(
    a.mySome((arr) => {
        return arr > 18;
    })
);