const phoneLookup = (callListLength, callback) => {
    const prefixes = [390, 420, 421, 430, 490, 520, 521, 541, 569, 591, 680, 681, 690, 716, 749, 961,
        360, 760]
    const phoneNumberList = []
    for (let i = 0; i < callListLength; i++) {
        phoneNumberList.push(`208-${prefixes[Math.floor((Math.random() * prefixes.length))]}-${Math.floor(Math.random() * (Math.floor(10000) - Math.ceil(1000)) + Math.ceil(1000))}`)
    }
    callback(undefined, phoneNumberList)
}

module.exports = phoneLookup