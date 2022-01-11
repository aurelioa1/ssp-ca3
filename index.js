const http = require('http'), //http module proides http server functionalities
path = require('path'), //path module utilities for working with the file and directory paths
express = require('express'), //module allow the app to respondo to http requests, defines the routing and render back the required content
fs = require('fs'), //module allow to work with the file system: read and write files back
xmlParse = require('xslt-processor').xmlParse, //module allows to work with xml files
xsltProcess = require('xslt-processor').xsltProcess, //module allows to utilise xsl transformations
xml2js = require('xml2js'); // does xml <-> json conversion

const router = express(); //router for the application
      server = http.createServer(router); //creating server to run always when the aplication is open.
router.use(express.static(path.resolve(__dirname, 'views')));// static content from view folder    

router.get('/', function(req, res) { //simple transformation to aply to the xml,xsl and apply to the browswer

    res.writeHead(200, {'Content-Type' : 'text/html'});// tell the browswer to wait for the content, 200 tell if the page exist or does not
    let xml = fs.readFileSync('DublinBooks.xml', 'utf8'),
        xsl = fs.readFileSync('DublinBooks.xsl', 'utf8');

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xsl);

    let result = xsltProcess(doc, stylesheet); //will get the html file    

    res.end(result.toString());
}); 

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() //the server will listen the requests sent, and port will be provided by gitpod itself and IP provided or use the localhost
{
    const addr = server.address(); // will get the address from the server
    console.log("Server listening at", addr.address + ":" + addr.port) //output
});