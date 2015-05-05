import express from 'express';
import reactEngine from 'react-engine';

let app = express();
let engine = reactEngine.server.create();

 // set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set jsx as the view engine
// Without this you would need to
// supply the extension to res.render()
// ex: res.render('index.jsx').
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', reactEngine.expressView);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'My Blog comment example',
    comments: [{name: 'Bob', comment: 'Hello world'}, {name: "alex", comment: "some more comments"}]
  });
})
 
app.listen(1982, () => console.log('App started...'))

