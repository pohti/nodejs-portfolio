const express = require ('express')
const app = express()
const hbs = require('hbs')
const path = require ('path')


const port = process.env.PORT | 3000

// PATHS
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// app
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Portfolio site is running on port: ${port}`)
})