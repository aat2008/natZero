const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const natZeroHandler = require('./nat0Responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex, // Default
  '/stylesheet': htmlHandler.getCSS, // Stylesheet
  '/background': natZeroHandler.getBackground, //Dnd Paper Background
  '/logo': natZeroHandler.getLogo, //D20 Logo
  '/natZeroRepo': natZeroHandler.getNatZero //The big repo
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);
  const acceptedTypes = request.headers.accept.split(',');

  //    localhost:3000     /
  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, params);
  } else {
    // urlStruct.notFound(request, response, params);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
