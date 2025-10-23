import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import User from '../models/user.js';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_REDIRECT_URI,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // First, check if user exists with this Google ID
    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      return done(null, user);
    }

    // Check if user exists with the same email but different auth method
    user = await User.findOne({ email: profile.emails[0].value });
    
    if (user) {
      // Link Google account to existing user
      user.googleId = profile.id;
      user.authProvider = 'google'; // Update auth provider
      await user.save();
      return done(null, user);
    }

    // Create new OAuth user
    user = new User({
      googleId: profile.id,
      username: await generateUniqueUsername(profile.displayName),
      email: profile.emails[0].value,
      // No password needed for OAuth users
    });
    
    await user.save();
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// GitHub Strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_REDIRECT_URI,
  scope: ['user:email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.username}@github.com`;
    
    // First, check if user exists with this GitHub ID
    let user = await User.findOne({ githubId: profile.id });
    
    if (user) {
      return done(null, user);
    }

    // Check if user exists with the same email but different auth method
    user = await User.findOne({ email: email });
    
    if (user) {
      // Link GitHub account to existing user
      user.githubId = profile.id;
      user.authProvider = 'github'; // Update auth provider
      await user.save();
      return done(null, user);
    }

    // Create new OAuth user
    user = new User({
      githubId: profile.id,
      username: await generateUniqueUsername(profile.username),
      email: email,
      // No password needed for OAuth users
    });
    
    await user.save();
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// Helper function to generate unique username
async function generateUniqueUsername(baseUsername) {
  let username = baseUsername.replace(/\s+/g, '').toLowerCase();
  let uniqueUsername = username;
  let counter = 1;

  while (await User.findOne({ username: uniqueUsername })) {
    uniqueUsername = `${username}${counter}`;
    counter++;
  }

  return uniqueUsername;
}

export default passport;