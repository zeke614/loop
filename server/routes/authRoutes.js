router.get("/google/callback", 
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    try {
      console.log('Google OAuth callback reached');
      console.log('User:', req.user?.email);

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
      
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      
      const redirectURL = `${frontendURL}/?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}&oauth=success`;
      
      console.log('Redirecting to home:', redirectURL);
      res.redirect(redirectURL);
    } catch (error) {
      console.error('Google OAuth callback error:', error);
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      res.redirect(`${frontendURL}/login?error=oauth_failed`);
    }
  }
);

router.get("/github/callback",
  passport.authenticate("github", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    try {
      console.log('GitHub OAuth callback reached');
      console.log('User:', req.user?.email);

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
      
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      
      const redirectURL = `${frontendURL}/?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}&oauth=success`;
      
      console.log('Redirecting to home:', redirectURL);
      res.redirect(redirectURL);
    } catch (error) {
      console.error('GitHub OAuth callback error:', error);
      const frontendURL = process.env.FRONTEND_URL || 'http://localhost:5173';
      res.redirect(`${frontendURL}/login?error=oauth_failed`);
    }
  }
);