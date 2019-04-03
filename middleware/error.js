module.exports = function (err, req, res, next) {
    // Log the Exception
    res.status(500).send('Something failed.');
}
