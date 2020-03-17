module.exports = function(req, res) {
  require('dotenc').config();
  const APPLICATION_KEY = process.env.APPLICATION_KEY;
  const CLIENT_KEY = process.env.CLIENT_KEY;

  var NCMB = require('ncmb');
  var ncmb = new NCMB(APPLICATION_KEY, CLIENT_KEY);

  var TestClass = ncmb.DataStore('TestClass');
  var testClass = new TestClass();

  testClass.set("message", "Hello, NCMB!")
            .save()
            .then(function(){
              res.status(200).send("OK");
            })
            .catch(function(error){
              res.status(500).send("NG:" + error);
            });
}
