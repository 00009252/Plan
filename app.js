const express = require('express')
const app = express()

app.set('view engine','pug')

app.use('/static',express.static('public'))


/* ----- localhost:3000 ----- */ 
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

const notes = ['Some awesome titles', 'Some awesome titles 2']

app.get('/notes', (req, res) => {
    res.render('notes', { notes: note })
})

app.listen(3000, err => {
    if(err) console.log(err)

    console.log('Server is running on port 3000...')
})