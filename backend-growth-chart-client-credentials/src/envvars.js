const vars = {
  CDR_CLIENT_ID: process.env.CDR_CLIENT_ID,
  CDR_CLIENT_SECRET: process.env.CDR_CLIENT_SECRET,
  PORT: process.env.PORT,
  CDR_SMART_AUTH_URL: process.env.CDR_SMART_AUTH_URL,
  CDR_URL: process.env.CDR_URL,
  CDR_STATE: process.env.CDR_STATE,
  NODE_ENV: process.env.NODE_ENV,
};

const check = () => {
  const invalidProperties = Object.keys(vars).filter(
    (property) => vars[property] === undefined
  );
  invalidProperties.forEach((e) => {
    console.error(`${e} must be defined`);
  });

  if (invalidProperties.length > 0) {
    process.exit(1);
  }
};

module.exports = {
  ...vars,
  check,
};
