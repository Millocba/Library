const passport = require('passport');
const passportJWT = require('passport-jwt');
const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

const User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'EeFwGaHwei3453!!',
  expiresIn: 60, // Duración de 60 segundos
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await User.findByPk(jwtPayload.id);
      if(user && user.rol=="admin") {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = {passport,jwtOptions};
