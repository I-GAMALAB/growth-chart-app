const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

const getToken = async () => {
  const payload = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.CDR_CLIENT_ID,
    client_secret: process.env.CDR_CLIENT_SECRET,
  });

  const config = {
    method: "post",
    url: process.env.CDR_SMART_AUTH_URL + "/oauth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: payload,
  };

  const { data } = await axios(config);

  return data.access_token;
};

const getPatientId = async (ppn, token) => {
  const config = {
    method: "GET",
    url: process.env.CDR_URL + "/Patient?identifier=" + ppn,
    headers: {
      "Content-Type": "application/json+fhir",
      Authorization: "Bearer " + token,
    },
  };

  const { data: bundle } = await axios(config);
  console.log(bundle);

  const patient = parsePatient(bundle);

  return patient?.resource?.id || null;
};

const parsePatient = (bundle) => {
  if (bundle.total === 0) return null;
  return {
    resource: bundle.entry[0].resource,
  };
};

module.exports = { getPatientId, getToken };
