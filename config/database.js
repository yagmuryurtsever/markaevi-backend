'use strict';

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: 'postgresql://postgres:jtnfBggLjrUmRVexzElByqWeYHkgeVkc@shortline.proxy.rlwy.net:45847/railway',
      ssl: { rejectUnauthorized: false }
    },
  },
});
