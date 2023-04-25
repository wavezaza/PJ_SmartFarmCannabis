const express = require('express');
const cors = require('cors')
const userRoute = require('./routes/api.js');
const port = 3008
const app = express();

app.use(cors())
app.use(express.json());
app.use('/', userRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});