const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const router = require('./router.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/kevinpozzi/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));