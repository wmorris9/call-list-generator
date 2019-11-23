console.log('Client side javascript file is loaded!')

const names = document.getElementById('names')
const numbers = document.getElementById('numbers')
const answers = document.getElementById('answers')
const results = document.getElementById('results')

fetch('/names').then((response) => {
    response.json().then((nameList) => {
        nameList.forEach((person) => {
            const listElement = document.createElement("p")
            listElement.appendChild(document.createTextNode(`${person}`))
            names.appendChild(listElement)
        })
    })
})

fetch('/numbers').then((response) => {
    response.json().then((numberList) => {
        numberList.forEach((number) => {
            const listElement = document.createElement("p")
            listElement.appendChild(document.createTextNode(`${number}`))
            numbers.appendChild(listElement)
        })
    })
})

fetch('/answer').then((response) => {
    response.json().then((answerList) => {
        answerList.forEach((answer) => {
            const listElement = document.createElement("p")
            listElement.appendChild(document.createTextNode(``))
            answers.appendChild(listElement)

            fetch('/result').then((response) => {
                response.json().then((result) => {
                    let listElement = document.createElement("p")
                    if (answer === 'A') {
                        listElement.appendChild(document.createTextNode(``))
                    } else {
                        listElement.appendChild(document.createTextNode(``))
                    }
                    results.appendChild(listElement)
                })
            })

        })
    })
})