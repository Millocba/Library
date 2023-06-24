const passport = require('passport');

function authenticateJWT(req, res, next) {
  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error de autenticación' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Acceso no autorizado' });
    }
    req.user = user;
    next();
  })(req, res, next);
}

module.exports = {
  authenticateJWT,
};
