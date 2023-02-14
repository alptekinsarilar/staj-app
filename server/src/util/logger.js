const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(data) {
    this.emit("log", data);
  }

  loginUpdate(data) {
    this.emit("loginUpdate", data);
  }
}

const logger = new Logger();

module.exports = logger;
