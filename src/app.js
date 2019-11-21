const express = require('express')
const hbs = require('hbs')
const path = require('path')
const numberGenerator = require('./utils/phone-lookup')
const nameGenerator = require('./utils/name-generator')
const answerGenerator = require('./utils/answer')
const resultGenerator = require('./utils/result')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const callListLength = 29

app.set('view engine', 'hbs') 
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
    })
})

app.get('/names', (req, res) => {
    nameGenerator(callListLength, (error, data) => {
        if (error) {
            return res.send(error)
        }
        res.send(data)
    })
})

app.get('/numbers', (req, res) => {
    numberGenerator(callListLength, (error, data) => {
        if (error) {
            return res.send(error)
        }
        res.send(data)
    })
})

app.get('/answer', (req, res) => {
    answerGenerator(callListLength, (error, data) => {
        if (error) {
            return res.send(error)
        }
        res.send(data)
    })
})

app.get('/result', (req, res) => {
    resultGenerator(callListLength, (error, data) => {
        if (error) {
            return res.send(error)
        }
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})