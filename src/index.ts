import express from 'express';
import bodyParser from 'body-parser';
import { createForm, getForms } from './form';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/create', createForm);
app.get('/forms', getForms);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
