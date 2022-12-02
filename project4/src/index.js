const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const Conf = require('conf');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

const hb_inst = handlebars.create({
    extname: '.handlebars',
    compilerOptions: {
        preventIndent: true
    },
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials')
});
app.engine('handlebars', hb_inst.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views/pages'));

app.use(require('./routes/user'));

app.use((req, res) => {
    res.render('404', {
        alert: {
            type: 'warning',
            title: '404 Page Not Found',
            message: 'No Page Found'
        }
    })
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});