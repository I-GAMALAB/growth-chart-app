const { Router } = require("express");
const { getPatientIdAndToken } = require("../controllers/index.controller");
const router = Router();

//Raiz
router.get("/", (req, res) => {
  res.json({
    message: "API FHIR CLIENT",
    timestamp: new Date().getTime(),
  });
});

router.get("/launch/:state/fhir", getPatientIdAndToken);

module.exports = router;
