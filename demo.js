/**
 * User: frank
 * Date: 13-7-14
 */
function clone(oldOne) {
    if (!oldOne) {return oldOne;} // null
    var type = typeof oldOne;
    if (type === 'string' || type === 'number' || type === 'boolean') {
        return oldOne;
    }
    var newOne;
    if (oldOne.constructor === Array) {
        console.log('array');
        newOne = [];
        oldOne.forEach(function (value, index) {
            newOne[index] = clone(value);
            console.log(index);
        });
        return newOne;
    }
    if (type === 'object') {
        newOne = {};
        for (var i in oldOne) {
            newOne[i] = clone(oldOne[i]);
            console.log(oldOne[i]);
            console.log(i);
        }
        return newOne;
    }
    newOne = oldOne;
    return newOne;
}
