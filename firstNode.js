function makeHttpRequestAsync(options, callback) {
    const req = http.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        callback(null, res.statusCode, responseData);
      });
    });
  
    req.on('error', (err) => {
      callback(err);
    });
  
    req.end();
  }

  const request = require('request');
  request('http://www.google.com', function (error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });