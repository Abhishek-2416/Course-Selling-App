const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader;
    console.log(token);

    const decoded = jwt.verify(token, process.env.USER_JWT_SECRET);

    console.log(decoded);
    req.userId = decoded.id;
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}

function adminAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader;
    console.log(token);

    const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET);

    console.log(decoded);
    req.userId = decoded.id;
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}



module.exports = {userAuth,adminAuth};
