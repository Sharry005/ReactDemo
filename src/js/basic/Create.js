let data = [{a: 1}, {b: 2}, {c: 6}, {d: 4}];
let data2 = [{a: 5}, {b: 4}, {c: 6}, {d: 4}, {e: 70}];
function toString(data) {
    for(var i = 0; i < data.length; i++) {
        dat[i] = JSON.stringify(data[i]);
    }
    return data;
}
function toJson(data) {
    for(var i = 0; i< data.length; i++) {
        data[i] = JSON.parse(data[i]);
    }
    return data;
}
let dataString = toString(data);
let data2String = toString(data);
//交集
let intersection = toJson(dataString.filter((val) => {
    return data2String.indexOf(val) > -1
}))
//并集
let union = toJson(dataString.filter((val) => {
    return !(data2String.indexOf(val) > -1)
}))
//补集
let complement = union.concat(intersection);
