import {UserModel, UserModelInterface} from "../models/UserModel";
import {generateMD5} from "../utils/generateHash";
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

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

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY || '123',
      jwtFromRequest: ExtractJWT.fromHeader('token')
    },
    async (payload: {data: UserModelInterface}, done: any): Promise<void> => {
      try {
        const user = await UserModel.findById(payload.data._id).exec()
        if (user) {
         return  done(null, user)
        } else {
          done(null, false)
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.serializeUser((user: UserModelInterface, done:any) => {
  done(null, user?._id);
});

passport.deserializeUser((id:any, done:any) => {
  UserModel.findById(id, (err:any, user:any) => {
    done(err, user);
  });
});

export {passport}