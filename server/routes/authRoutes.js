import express from "express";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";
import { registerUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

// Existing routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Google OAuth routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", 
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    try {
      // Generate JWT token
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      
      const userData = {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email
      };
      
      // Redirect to frontend with token
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendURL}/oauth-success?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`);
    } catch (error) {
      console.error('OAuth callback error:', error);
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendURL}/login?error=oauth_failed`);
    }
  }
);

// GitHub OAuth routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get("/github/callback",
  passport.authenticate("github", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    try {
      // Generate JWT token
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      
      const userData = {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email
      };
      
      // Redirect to frontend with token
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendURL}/oauth-success?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`);
    } catch (error) {
      console.error('OAuth callback error:', error);
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendURL}/login?error=oauth_failed`);
    }
  }
);

export default router;