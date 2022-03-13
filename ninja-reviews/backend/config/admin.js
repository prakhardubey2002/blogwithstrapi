module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90002c8295858f39e1554aad3b60bf23'),
  },
});
