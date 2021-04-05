/* ---- Imports ---- */
const express = require('express')
const app = express()

const fs = require('fs')

app.set('view engine','pug')

/* ---- Middle whereas ---- */
app.use('/static',express.static('public'))
app.use(express.urlencoded({ extended: false }))

/* ----- localhost:3000 ----- */ 
app.get('/', (req,res) => {
    res.render('home')
})

/* ---- the function serves create button ---- */
app.get('/create', (req, res) => {
    res.render('create')
})

/* ---- Submission button to back-end ---- */
app.post('/create', (req, res) => {
    const title = req.body.title
    const description = req.body.description

    if(title.trim() === '' && description.trim() === '') {
        res.render('create', { error: true })
    } else {
        fs.readFile('./data/notes.json', (err, data) => {
            if(err) throw err

            const notes = JSON.parse(data)

            notes.push({
                title: title,
                description: description,
            })
        })
    }

    res.render('create')
})

const notes = ['Some awesome titles', 'Some awesome titles 2']

app.get('/notes', (req, res) => {
    res.render('notes', { notes: notes })
})

app.get('/notes/detail', (req, res) => {
    res.render('detail')
})

app.listen(3000, err => {
    if(err) console.log(err)

    console.log('Server is running on port 3000...')
})