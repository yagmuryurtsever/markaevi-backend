'use strict';

module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://www.markaevi.com.tr',
        'https://markaevi.com.tr',
        'http://localhost:3000',
        'http://localhost:1337'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'X-Requested-With',
        'Accept',
        'Origin'
      ],
      credentials: true
    },
  },
};
