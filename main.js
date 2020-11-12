const express = require('express');
const router = express.Router();

const app = express();
app.use(express.urlencoded());
app.use(express.json());

const port = 9000;

app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`Example app listening at: http://localhost:${port}`);
});

router.get('/json', (request, response) => {
  console.log(request.url);
  response.sendFile(__dirname + '/public/json.html');
});

router.post('/user', (request, _response) => {
  console.log(request.body);
  console.log(request.body.name);
  console.log(request.body.string);
});

app.use('/', router);