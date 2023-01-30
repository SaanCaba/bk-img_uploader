const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes/index')

app.use(
    cors({
		origin: "**",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
)

app.use('/', routes)

const port = process.env.PORT;


app.listen(port, () => console.log('server run on port ' + port))