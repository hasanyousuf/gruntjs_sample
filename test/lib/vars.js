casper.on("page.error", function(msg, trace) {
    this.echo("Error: " + msg);
    // maybe make it a little fancier with the code from the PhantomJS equivalent
});

var u = require('utils');
var artifactDirImage = "artifacts/images/";
