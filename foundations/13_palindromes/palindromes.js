const palindromes = function (string) {
    const len = string.length
    l = 0; r = len - 1; 
    while (l < r) {
        if (!/^[A-Za-z0-9]$/.test(string[l])) {
            l++;
            continue;
        } 
        if (!/^[A-Za-z0-9]$/.test(string[r])) {
            r--;
            continue;
        }
        if (string[l].toLowerCase() != string[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
