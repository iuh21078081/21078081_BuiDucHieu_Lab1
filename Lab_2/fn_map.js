Array.prototype.myMap = function(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
};

var a = [1, 2, 3, 10, 14, 17];
console.log(
    a.myMap((num) => {
        return num * 2;
    })
);