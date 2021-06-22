import {UserModel, UserModelInterface} from "../models/UserModel";
import {generateMD5} from "../utils/generateHash";

const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;



passport.use(
  new LocalStrategy(
  async (username: string, password: string, done: any): Promise<void> => {
    try {
      const user = await UserModel.findOne({$or: [{email: username}, {username}]}).exec()
      if (!user) {
        return done(null, false)
      }

      if (user.password === generateMD5(password + process.env.SECRET_KEY) ){
         done(null, user)
      } else {
         done(null, false)
      }
    } catch (error) {
      done(error, false)
    }
  })
)

passport.serializeUser((user: UserModelInterface, done:any) => {
  done(null, user?._id);
});

passport.deserializeUser((id:any, done:any) => {
  UserModel.findById(id, (err:any, user:any) => {
    done(err, user);
  });
});

export {passport}