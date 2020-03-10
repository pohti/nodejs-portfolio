const express = require('express')
const app = express()
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home",
        name: "Min"
    })
})

app.get('/about', (req, res) => {
    res.send('Hello from about')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})