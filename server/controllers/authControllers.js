import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

  
    const firstName = username.charAt(0).toUpperCase() + username.slice(1).replace(/[0-9]/g, '');

    const newUser = new User({ 
      username, 
      email, 
      password: hashedPassword,
      authProvider: 'local',
      firstName: firstName 
    });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({ 
      message: "User registered successfully",
      token,
      user: { 
        id: newUser._id, 
        username: newUser.username, 
        email: newUser.email,
        firstName: newUser.firstName 
      }
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (user.authProvider !== 'local') {
      return res.status(400).json({ 
        message: `This account uses ${user.authProvider} authentication. Please sign in with ${user.authProvider}.` 
      });
    }

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
        email: user.email,
        firstName: user.firstName 
      } 
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};