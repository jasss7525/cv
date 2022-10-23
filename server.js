const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/index.html'));});
// app.listen(process.env.PORT || 8080);


// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));