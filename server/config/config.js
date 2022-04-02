import 'dotenv/config'

const config = {
  client: 'mysql2',
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DATABASE
  }
};

export default config;
