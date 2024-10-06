Array.prototype.myEvery = function(callback)
{
    for (var i = 0; i < this.length; i++)
    {
        if (!callback(this[i], i, this))
        {
            return false;
        }
    }
    return true;
};
var a = [5,8,6];
console.log(a.myEvery(
    function(x){
        return x>0;
    })
); 