var fs = require('fs');
fs.appendFile('index.html', '<h1>Hello World!</h1>', function (err){
    if(err) throw err;
    console.log('update!');
});
