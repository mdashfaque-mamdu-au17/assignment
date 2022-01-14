const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_TOKEN || 'secret',
    {
      expiresIn: '30d',
    }
  );
};

exports.isAuth = (req, res, next) => {
  // to get the authorization fields from header of request
  const authorization = req.headers.authorization;
  if (authorization) {
    // bearer xxxxxxxx (get rid of bearer part)
    const token = authorization.slice(7, authorization.length);

    // decrypt token
    jwt.verify(token, process.env.JWT_TOKEN || 'secret', (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
