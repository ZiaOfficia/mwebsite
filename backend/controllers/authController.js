const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminUsername || !adminPasswordHash) {
      return res.status(500).json({ message: "Server configuration error" });
    }

    if (
      username === adminUsername &&
      (await bcrypt.compare(password, adminPasswordHash))
    ) {
      res.json({
        _id: "admin",
        username: adminUsername,
        token: generateToken("admin"),
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginUser };
