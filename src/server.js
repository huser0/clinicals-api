import express from 'express';
import properties from './config/properties.js';
import db from './config/db.js';
import bodyParser from 'body-parser';
import clinicalRoutes from './routes.js'

db();

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var clinicalRouter = express.Router();
clinicalRoutes(clinicalRouter)
app.use('/clinicalsapi', clinicalRouter)

app.listen(properties.PORT, (err) => {
  if(err) console.log(err);
  console.log("Application Started On Port: "+properties.PORT);
})