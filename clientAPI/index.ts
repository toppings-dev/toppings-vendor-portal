// now you can just import clientAPI folder and get all API stuff.
module.exports = {
    ...require('./local'),
    ...require('./users'),
}

export {}