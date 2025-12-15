module.exports = ({ env }) => ({
  enabled: true,
  origin: [
    'https://markaevi.com.tr',
    'https://www.markaevi.com.tr',
    'http://localhost:3000',
    'http://localhost:1337',
    'https://api.markaevi.com.tr',
    'http://api.markaevi.com.tr',
    '*', // Tüm origin'lere izin ver (geçici çözüm)
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  headers: [
    'Content-Type',
    'Authorization',
    'Origin',
    'Accept',
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Credentials'
  ],
  credentials: true,
  keepHeaderOnError: true,
});
