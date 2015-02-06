var fs=require("fs");

module.exports={
  env: process.env.NODE_ENV||"development",
  host: process.env.HOST||"localhost",
  port: process.env.PORT||3000,
  db: {
    host: "localhost",
    database: "MyDatabase"
  },
  jwt: {
    secret: "H9XVhpaHhNuoHkGNQ4vk",
    options: {
      audience: "https://t-cook.de",
      issuer: "https://t-cook.de",
      expiresInMinutes: 60*24*7,
      subject: "authenticate"
    }
  },
  ssl: {
    ca: fs.readFileSync("../ssl/t-cook_de.ca-bundle"),
    cert: fs.readFileSync("../ssl/t-cook_de.crt"),
    key: fs.readFileSync("../ssl/t-cook_de.key")
  }
};
