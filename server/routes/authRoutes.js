import express from "express";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";
import { registerUser, loginUser, deleteUser } from "../controllers/authControllers.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete", authenticateToken, deleteUser);


router.get("/google", passport.authenticate("google", { 
  scope: ["profile", "email"],
  prompt: "select_account" 
}));

router.get("/google/callback", 
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    try {
      console.log('Google OAuth callback reached');
      
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      
      const userData = {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        firstName: req.user.firstName 
      };
      
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      const redirectURL = `${frontendURL}/?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}&oauth=success`;
      
      res.redirect(redirectURL);
    } catch (error) {
      console.error('Google OAuth callback error:', error);
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      res.redirect(`${frontendURL}/login?error=oauth_failed`);
    }
  }
);


router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get("/github/callback",
  passport.authenticate("github", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    try {
      console.log('GitHub OAuth callback reached');
      
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      
      const userData = {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        firstName: req.user.firstName
      };
      
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      const redirectURL = `${frontendURL}/?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}&oauth=success`;
      
      res.redirect(redirectURL);
    } catch (error) {
      console.error('GitHub OAuth callback error:', error);
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      res.redirect(`${frontendURL}/login?error=oauth_failed`);
    }
  }
);

export default router;