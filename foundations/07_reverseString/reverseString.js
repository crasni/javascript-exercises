const reverseString = function(str) {
    let res_str = [];
    for (let i = str.length - 1; i >= 0; i--) {
        res_str.push(str[i]);
    }
    return res_str.join("");
};

// Do not edit below this line
module.exports = reverseString;
