passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_REDIRECT_URI,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('Google OAuth profile received for:', profile.emails?.[0]?.value);

    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      console.log('Existing Google user found:', user.email);
      return done(null, user);
    }

    user = await User.findOne({ email: profile.emails[0].value });
    
    if (user) {
      console.log('Linking Google account to existing user:', user.email);
      user.googleId = profile.id;
      user.authProvider = 'google';
      await user.save();
      return done(null, user);
    }

    user = new User({
      googleId: profile.id,
      username: await generateUniqueUsername(profile.displayName),
      email: profile.emails[0].value,
    });
    
    await user.save();
    console.log('New Google user created:', user.email);
    return done(null, user);
  } catch (error) {
    console.error('Google strategy error:', error);
    return done(error, null);
  }
}));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_REDIRECT_URI,
  scope: ['user:email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.username}@github.com`;
    
    console.log('GitHub OAuth profile received for:', email);

    let user = await User.findOne({ githubId: profile.id });
    
    if (user) {
      console.log('Existing GitHub user found:', user.email);
      return done(null, user);
    }

    user = await User.findOne({ email: email });
    
    if (user) {
      console.log('Linking GitHub account to existing user:', user.email);
      user.githubId = profile.id;
      user.authProvider = 'github';
      await user.save();
      return done(null, user);
    }

    user = new User({
      githubId: profile.id,
      username: await generateUniqueUsername(profile.username),
      email: email,
    });
    
    await user.save();
    console.log('New GitHub user created:', user.email);
    return done(null, user);
  } catch (error) {
    console.error('GitHub strategy error:', error);
    return done(error, null);
  }
}));