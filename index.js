//imports
require('dotenv').config();

//import server
const server = require('./api/server.js');

//port from env
const PORT = process.env.PORT || 5400;

//listen
server.listen(PORT, () => console.log(`\n server is running on port ${PORT} \n`))