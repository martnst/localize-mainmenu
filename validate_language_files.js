// run this from project root to check if the json structures of all langauges files are valid and if all tokens provided with the template are translated
// node validate_language_files.js

var fs = require('fs');
var colors = require('colors');

var template_file_name = '_template.json';
var template_keys = require('./languages/' + template_file_name );


fs.readdir('./languages', function(err, files) {
  if (err) console.log(err);
  files.forEach(function(fileName) {
    if (fileName == template_file_name) { return; }
    fs.readFile('./languages/' + fileName, function(err, data) {
      if (err) console.log(jerror);
      try {
        var map = JSON.parse(data);  
        console.log("%s: validate json  ".green, fileName);

        for (var key in template_keys) {
          if (map[key] == null) { 
            console.warn("\tno translation found for '%s'".red, key);
          } 
        }

        for (var key in map) {

          if (!(key in template_keys)) {
            console.log("\ttranslation found for '%s' not defined in template".gray, key);
          }
        }

      } catch (e) {
        console.log("%s: %s".red, fileName, e);
      }
    });
  });
}); 
