const logger = require('./logger');

const add = () => {
    const args = process.argv.slice(2);
    return args.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
};

logger(`The sum of numbers is ${add()}`);