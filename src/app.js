const express = require ('express')
const app = express()

const port = process.env.PORT | 3000

app.get('', (req, res) => {
    res.send('Hello friend')
})

app.listen(port, (port) => {
    console.log(`Portfolio site is running on port: ${port}`)
})