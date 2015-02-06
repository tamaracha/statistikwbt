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
  }
};
