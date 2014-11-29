module.exports.connections = {
  mongodbServer: {
    adapter: 'sails-mongo',
    url: process.env.MONGOHQ_URL
    //port: 27017,
    // user: 'username',
    // password: 'password',
    //database: 'MyDatabase'
  },

};
