const  baseController = require("../controllers/baseController")

router.get("/cause-error", baseController.causeIntentionalError);
