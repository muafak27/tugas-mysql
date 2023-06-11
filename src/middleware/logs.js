const logRequest = (req, res, next) => {
    console.log('terjadi log Request di:', req.path)
    next()
}

module.exports = logRequest;