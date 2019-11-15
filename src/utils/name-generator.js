const request = require("request")

const randomNames = (callListLength, callback) => {
    const randomNameList = []
    const url = `https://uinames.com/api/?amount=${callListLength}&region=United%20States`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            return callback('Unable to get names.', undefined)
        }
        for (let i = 0; i < callListLength; i++) {
            randomNameList.push(`${body[i].name} ${body[i].surname}`)
        }
        callback(undefined, randomNameList)
    })
}

module.exports = randomNames