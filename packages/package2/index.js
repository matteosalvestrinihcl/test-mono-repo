const fs = require('fs');


fs.readFile('file.txt', (err, res) => {

    res.forEach( char => console.log(char));
});
