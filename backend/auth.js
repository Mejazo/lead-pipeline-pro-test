const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Registration
async function register(req, res) {
  const { email, password } = req.body;
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Save to database (später implementieren)
  console.log('User registered:', email);
  
  res.json({ success: true });
}

// User Login
async function login(req, res) {
  const { email, password } = req.body;
  
  // Check password (später mit DB vergleichen)
  const isValid = await bcrypt.compare(password, hashedPassword);
  
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Generate JWT token
  const token = jwt.sign({ email }, 'secret-key', { expiresIn: '7d' });
  
  res.json({ token });
}

module.exports = { register, login };
