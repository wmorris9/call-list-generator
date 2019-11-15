const request = require("request")

const callListLength = 60

const randomNames = (callback) => {
    const randomNameList = []
    const url = `https://uinames.com/api/?amount=${callListLength}&region=United%20States`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            return callback('Unable to get names.', undefined)
        }
        callback(undefined, body)
    })
}

const phoneLookup = (callback) => {
    const prefixes = [390, 420, 421, 430, 490, 520, 521, 541, 569, 591, 680, 681, 690, 716, 749, 961,
        360, 760]
    const callList = []
    randomNames((error, body) => {
        for (let i = 0; i < callListLength; i++) {
            callList.push(`${body[i].name} ${body[i].surname}: 208 ${prefixes[Math.floor((Math.random() * prefixes.length))]} ${Math.floor(Math.random() * (Math.floor(10000) - Math.ceil(1000)) + Math.ceil(1000))}`)
        }
        callback(undefined, callList)
    })
}

module.exports = phoneLookup