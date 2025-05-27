const invController = require("../controllers/invController")

router.get("/detail/:invId", invController.buildDetailView);
