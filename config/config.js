var fs=require("fs");

module.exports={
  env: process.env.node_env||"development",
  port: process.env.port||3000,
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
    ca: fs.readFileSync(__dirname+"/ssl/t-cook_de.ca-bundle"),
    cert: fs.readFileSync(__dirname+"/ssl/t-cook_de.crt"),
    key: fs.readFileSync(__dirname+"/ssl/t-cook_de.key")
  }
};
