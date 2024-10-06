Array.prototype.myFind = function(callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return this[index];
        }
    }
    return undefined;
};
var a = [1, 2, 3, 10, 14, 17];
console.log(
    a.myFind((num) => {
        return num > 10;
    })
);