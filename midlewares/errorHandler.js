const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ errorMsg: err.message || "Error interno del servidor" });
};

export default errorHandler;