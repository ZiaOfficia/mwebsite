const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    // Enable logging in dev, disable in prod (or use custom logger)
    logging: process.env.NODE_ENV === "development" ? console.log : console.log, // Temporarily enable logging for debugging
    dialectOptions: {
      connectTimeout: 60000, // 60 seconds timeout
      // Hostinger / Cloud DBs often need SSL.
      ...(process.env.DB_SSL === "true" && {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }),
    },
  },
);

module.exports = sequelize;
