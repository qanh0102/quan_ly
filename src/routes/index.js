const catsRouter = require('./cats');
const dogsRouter = require('./dogs');
const meRouter = require('./me');
const catRouter = require('./cat');
const dogRouter = require('./dog');

function route(app) {

      app.use('/cats', catsRouter);
      app.use('/dogs', dogsRouter);
      app.use('/me', meRouter);
      app.use('/cat', catRouter);
      app.use('/dog', dogRouter);


      app.get('/', (req, res) => {
          res.render('home');
        });
      
      app.get('/login', (req, res) => {
        res.render('login');
      });
      
      app.get('/sigup', (req, res) => {
        res.render('sigup');
      });
}

module.exports = route;