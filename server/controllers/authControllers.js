export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if user is an OAuth user (shouldn't use password login)
    if (user.authProvider !== 'local') {
      return res.status(400).json({ 
        message: `This account uses ${user.authProvider} authentication. Please sign in with ${user.authProvider}.` 
      });
    }

    // compare passwords (only for local users)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ 
      token, 
      user: { 
        id: user._id, 
        username: user.username, 
        email: user.email 
      } 
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};