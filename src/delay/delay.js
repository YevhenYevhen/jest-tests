const delay = (cb, delay) => {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle(cb());
        }, delay);
    })
}

module.exports = delay;