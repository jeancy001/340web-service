const invModel = require("../models/inventory-model");
const utilities = require("../utilities/");

async function buildDetailView(req, res, next) {
  try {
    const invId = parseInt(req.params.invId);
    const vehicleData = await invModel.getInventoryItemById(invId);
    const vehicleHtml = utilities.buildVehicleDetail(vehicleData);
    res.render("inventory/detail", {
      title: `${vehicleData.inv_make} ${vehicleData.inv_model}`,
      nav: await utilities.getNav(),
      vehicleHtml,
    });
  } catch (error) {
    next(error);
  }
}
