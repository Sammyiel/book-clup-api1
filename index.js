import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

dotenv.config()

const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, UPDATE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);


app.listen(port, () => {
    console.log(`Our Book Club API is now available on port ${port}`)
})