/*
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 3000
*/
var fs, key, crt, ca;
fs=require("fs");
ca=fs.readFileSync("./config/ssl/t-cook_de.ca-bundle");
key=fs.readFileSync("./config/ssl/t-cook_de.key");
crt=fs.readFileSync("./config/ssl/t-cook_de.crt");

module.exports = {
  /***************************************************************************
   * Your SSL certificate and key, if you want to be able to serve HTTP      *
   * responses over https:// and/or use websockets over the wss:// protocol  *
   * (recommended for HTTP, strongly encouraged for WebSockets)              *
   *                                                                         *
   * In this example, we'll assume you created a folder in your project,     *
   * `config/ssl` and dumped your certificate/key files there:               *
   ***************************************************************************/

	ssl: {
		ca: ca,
		key: key,
		cert: crt
	},

  port: process.env.PORT || 3000,

//   environment: process.env.NODE_ENV || 'production',
};
