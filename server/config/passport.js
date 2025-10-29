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

function extractFirstName(profile) {
  if (profile.provider === 'google' && profile.displayName) {
    const firstName = profile.displayName.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  }
  
  if (profile.provider === 'github') {
    if (profile.displayName) {
      const firstName = profile.displayName.split(' ')[0];
      return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    }
    return profile.username.charAt(0).toUpperCase() + profile.username.slice(1).toLowerCase();
  }
  
  return profile.displayName || profile.username;
}

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_REDIRECT_URI,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('Google OAuth profile received for:', profile.emails?.[0]?.value);
    console.log('Google displayName:', profile.displayName);

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

      if (!user.firstName) {
 user.firstName = extractFirstName(profile);
console.log('Updating missing firstName to:', user.firstName);
 }
      await user.save();
      return done(null, user);
    }

    const firstName = extractFirstName(profile);
    user = new User({
      googleId: profile.id,
      username: await generateUniqueUsername(firstName),
      email: profile.emails[0].value,
      firstName: firstName, 
    });
    
    await user.save();
    console.log('New Google user created:', user.email, 'with username:', user.username);
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
    console.log('GitHub displayName:', profile.displayName);
    console.log('GitHub username:', profile.username);

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

      if (!user.firstName) {
 user.firstName = extractFirstName(profile);
 console.log('Updating missing firstName to:', user.firstName);
}

      await user.save();
      return done(null, user);
    }

    const firstName = extractFirstName(profile);
    user = new User({
      githubId: profile.id,
      username: await generateUniqueUsername(firstName),
      email: email,
      firstName: firstName, 
    });
    
    await user.save();
    console.log('New GitHub user created:', user.email, 'with username:', user.username);
    return done(null, user);
  } catch (error) {
    console.error('GitHub strategy error:', error);
    return done(error, null);
  }
}));

export default passport;