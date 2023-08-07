const Approuter = require('@sap/approuter');
const ar = Approuter();
console.log(ar.beforeRequestHandler);

ar.beforeRequestHandler.use('/my-jwt', function (req, res) {
    res.end(`Your token is: ${req.session.user.token.accessToken}`);
});

ar.start();