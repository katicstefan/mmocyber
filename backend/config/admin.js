module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5325a56d5805c99e447f9f30f79e53ca'),
  },
});
