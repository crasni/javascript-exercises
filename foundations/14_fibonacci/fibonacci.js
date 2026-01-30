const fibonacci = function(input) {
    const lol = Number(input)
    if (lol < 0) return "OOPS";

    let prev = 0, cur = 1;
    for (let i = 0; i < lol; i++) {
        [prev, cur] = [cur, prev + cur];
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
