const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  // get the token
  const token = req.get('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'no token, access denied' });
  //verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};

module.exports = auth;
