const { constants } = require("../Constant.js");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.FORBIDDEN:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Forbidden",
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Not Found",
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "unauthorized",
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "ServerError",
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "ValidationError",
      });
      break;
    default:
      next();
  }
};

module.exports = errorHandler;
