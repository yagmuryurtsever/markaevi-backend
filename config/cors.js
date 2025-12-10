module.exports = ({ env }) => ({
  enabled: true,
  origin: ['*'], // Production'da spesifik origin'ler belirleyin
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  headers: '*',
  keepHeaderOnError: true,
});
