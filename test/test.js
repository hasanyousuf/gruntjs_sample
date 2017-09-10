/* var u = require('utils');*/
casper.test.begin('Test', 1, function suite(test) {


    casper.start("http://localhost/index.html", function() {

        casper.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.66 Safari/537.36');

    });
    var x = require('casper').selectXPath;
    var fields = {};
    casper.then(function() {
        casper.test.comment("locating form in html");
        casper.test.assertExists(x('.//form[@name="hasanForm"]'));

        /** Creating an array to store form data*/

        /** Filling array with form data */
        fields['//*[@id="ext-gen1089"]'] = "first text box";
        fields['//*[@id="ext-gen1091"]'] = "second text box";

        /** Passing the data array to the full to store data in the form 
         *  To capture the form with data, we donot submit the form by passing 
         *  false signal in third paramter of fillXPath function 
         *  */
        this.fillXPath('form[name="hasanForm"]', fields, false);
        this.capture(artifactDirImage + "Screenshotbefore_submit.png");
    });
    casper.then(function() {
        // you can use fillxpath again using third parameter true to submit the form
        //this.fillXPath('form[name="hasanForm"]', fields, true);
        this.click(x(".//*[@id='button-1054-btnEl']"));

    });
    casper.then(function() {

        this.capture(artifactDirImage + "Screenshotafter_submit.png");
    });
    casper.run(function() {
        test.done();
    });
});
