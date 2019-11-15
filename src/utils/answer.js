const answer = (callListLength, callback) => {
    const answers = []
    const answerProbability = 2
    const voicemailProbability = 6
    const naProbability = 3
    const totalProbability = answerProbability + naProbability + voicemailProbability
    for (let i = 0; i < callListLength; i++) {
        let selection = Math.floor(Math.random() * totalProbability)
        if (selection < answerProbability) {
            answers.push('A')
        } else if (selection < answerProbability + voicemailProbability) {
            answers.push('VM')
        } else {
            answers.push('N/A')            
        }
    }
    callback(undefined, answers)
}

module.exports = answer