module.exports.apiPort = 15030
module.exports.apiAccessPoint = `http://localhost:${this.apiPort}`
module.exports.apiRoute = (route) => this.apiAccessPoint + route 