const http = require('http'), //http module proides http server functionalities
path = require('path'), //path module utilities for working with the file and directory paths
express = require('express'), //module allow the app to respondo to http requests, defines the routing and render back the required content
fs = require('fs'), //module allow to work with the file system: read and write files back
xmlParse = require('xslt-processor').xmlParse, //module allows to work with xml files
xsltProcess = require('xslt-processor').xsltProcess, //module allows to utilise xsl transformations
xml2js = require('xml2js') // does xml <-> json conversion