const { getPatientId, getToken } = require("../services/index.service");

const getPatientIdAndToken = async (req, res) => {
  //service

  const access_token = await getToken();
  const patient_id = await getPatientId(req.query.ppn, access_token);
  const state = req.params.state;

  res.json({ access_token, patient_id, state });
};

module.exports = { getPatientIdAndToken };
