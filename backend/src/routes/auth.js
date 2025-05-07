const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const USER = {
  username: "admin",
  passwordHash: bcrypt.hashSync("admin123", 10)
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== USER.username) {
    return res.status(401).json({ error: 'Usuario no válido' });
  }

  const validPass = await bcrypt.compare(password, USER.passwordHash);
  if (!validPass) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '4h' });
  res.json({ token });
});

module.exports = router;
