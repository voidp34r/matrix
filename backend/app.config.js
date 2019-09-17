module.exports = {
  ROOMS_SOURCE: process.env.ROOMS_SOURCE,
  ENVIRONMENT: process.env.NODE_ENV,
  GOOGLE_CREDENTIAL:
    process.env.GOOGLE_CREDENTIAL
    || "492750138272-jlqa79nn55jcfecrfu3f2puvkspith55.apps.googleusercontent.com",
  ENFORCE_SSL: process.env.ENFORCE_SSL || "false",
  CUSTOM_STYLE: process.env.CUSTOM_STYLE || "",
  HOST: "0.0.0.0",
  PORT: process.env.PORT || 80,
};
