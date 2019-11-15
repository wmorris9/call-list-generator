console.log('Client side javascript file is loaded!')

const list = document.getElementById('list')

fetch('/list').then((response) => {
    response.json().then((nameList) => {
        nameList.forEach((person) => {
            const listElement = document.createElement("li")
            listElement.appendChild(document.createTextNode(`${person}`))
            list.appendChild(listElement)
        })
    })
})