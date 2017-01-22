const PI = Math.PI;

// exports.area = radius => PI * radius * radius;
// exports.circumference = radius => 2 * PI * radius;

module.exports = function (radius) {
    return {
        area: () => PI * radius * radius,
        circumference: () => 2 * PI * radius
    };
};