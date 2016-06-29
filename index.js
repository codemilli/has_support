module.exports = function (str) {
    if (typeof str !== "string") {
        return false;
    }

    return (str.charCodeAt(0) - 44032) % 28 !== 0;
};
