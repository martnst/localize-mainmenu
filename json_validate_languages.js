// run this from project root to check if the json structures of all langauges files are valid
// node json_validate_languages.js

var fs = require('fs');
var colors = require('colors');

fs.readdir('./languages', function(err, files) {
  if (err) console.log(err);
  files.forEach(function(fileName) {
    fs.readFile('./languages/' + fileName, function(err, data) {
      if (err) console.log(jerror);
      try {
        JSON.parse(data);  
        console.log("%s: validate json  ".green, fileName);
      } catch (e) {
        console.log("%s: %s".red, fileName, e);
      }
    });
  });
}); 
