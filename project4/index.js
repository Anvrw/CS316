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

//app.get('/', (req, res) => res.send('sanity check'));

app.use(require('./routes/user'));

app.route('/login')
    .get((req, res) => {
        res.render(
            'login', {}
        );
    });

app.route('/newUser')
    .get((req, res) => {
        res.render(
            'newUser', {}
        );
    });

app.route('/user')
    .get((req, res) => {
        res.render(
            'user', {}
        );
    });


app.use((req, res) => {
    res.render('404', {
        alert: {
            type: 'warning',
            title: '404 Page Not Found',
            message: 'No Page Found'
        }
    })
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
