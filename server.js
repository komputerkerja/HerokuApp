const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const NoteModel = require('./models/NoteModel');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(ejsLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.render('home', {
        title: 'Home',
        layout: 'layouts/main', 
    })
})

app.get('/tags', async (req,res) => {
    const data = await NoteModel.all();
    res.render('tags', {
        title: 'Tags',
        layout: 'layouts/main', 
        data
    })
})

app.get('/show/:id', (req,res) => {
    console.log(req.params.id);
    res.render('show', {
        title: 'Tags',
        layout: 'layouts/main'
    })
});

app.post('/tags', async (req,res) => {
    await NoteModel.create(req.body);
    res.redirect('/tags');
})

app.get('/delete/:id', async (req,res) => {
    await NoteModel.destroy(req.params.id);
    res.redirect('/tags');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));