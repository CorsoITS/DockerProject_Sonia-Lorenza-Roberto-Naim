const routerItems = require("./catalogRoute");
const routerStock = require("./inventoryRoute");

function ConnectRouter(app) {
    app.use('/catalogo', routerItems)
    app.use('/inventario', routerStock)
}

module.exports = ConnectRouter;