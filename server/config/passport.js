// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('../models/User');

// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_CLIENT_ID,
//     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     callbackURL: '/auth/facebook/callback',
//     profileFields: ['id', 'emails', 'name']
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       let user = await User.findOne({ socialId: profile.id, provider: 'facebook' });

//       if (!user) {
//         user = await User.create({
//           socialId: profile.id,
//           provider: 'facebook',
//           email: profile.emails[0].value,
//           username: profile.name.givenName + ' ' + profile.name.familyName
//         });
//       }

//       done(null, user);
//     } catch (error) {
//       done(error, false);
//     }
//   }
// ));

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: '/auth/google/callback'
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       let user = await User.findOne({ socialId: profile.id, provider: 'google' });

//       if (!user) {
//         user = await User.create({
//           socialId: profile.id,
//           provider: 'google',
//           email: profile.emails[0].value,
//           username: profile.displayName
//         });
//       }

//       done(null, user);
//     } catch (error) {
//       done(error, false);
//     }
//   }
// ));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id)
//     .then(user => done(null, user))
//     .catch(error => done(error, false));
// });
