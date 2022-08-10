const router = require("express").Router();

const { getAdds, getAdd, addNewAdd } = require("../handlers/addsHandlers");

router.get("/api/adds", (req, res) => getAdds(req, res));

router.get("/api/add/:add", (req, res) => getAdd(req, res));

router.post("/api/add/add", (req, res) => addNewAdd(req, res));

module.exports = router;
