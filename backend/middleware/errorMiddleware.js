//err se ubacuje da bi se override-ovao express-ov error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        //daje dodatne informacije, ali samo kada smo u development modu
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}