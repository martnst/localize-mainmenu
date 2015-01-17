// run node generate_search_translations_commands.js 

var fs = require('fs');
var colors = require('colors');
var template_file_name = '_template.json';
var template_keys = require('./languages/' + template_file_name);


fs.readdir('./languages', function(err, files) {
  if (err) console.log(err);
  files.forEach(function(fileName) {
    if (fileName == template_file_name) { return; }
    var language = fileName.substr(0, fileName.length-5);
    console.log("\n" + language + ":\n");

    var search_localized_strings_cmd = "cd /Applications && cat *.app/Contents/Resources/" + language + ".lproj/MainMenu.strings | grep '";

    for (var key in template_keys) {
      search_localized_strings_cmd += '\\|"' + key + '"';
    }

    search_localized_strings_cmd += '\' -A 1';

    console.log(search_localized_strings_cmd);
    console.log("\n\n");
  });
}); 