import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
  name: String,
  email:{
    type: String,
    required: true,
    unique: true,
     lowercase: true,
      validate: {
          validator: function(value) {
              return /\S+@\S+\.\S+/.test(value); // Regular expression for email validation
          },
          message: 'Please provide a valid email'
      }
  },
  password:{
    type:String,
    require: true,    
      minLength: [8, 'Must be at least 8 characters']
  },
   role: {
      type: String,
      enum: ['citizen','admin'],
      default:'citizen'
},
otpExpires:{type:String},
  otp: {
    type: String
},
  verified:{type:Boolean,default:false }
}, { timestamps: true });


userSchema.pre('save', async function (next){
  if(!this.isModified(password)){
    return next();
  }
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method for login

userSchema.statics.login = async function (email, password){
  const user = await this.findOne({email});
  if(user){
    const auth = await bcrypt.compare(password, user.password);
    if(auth){
      return user;
    }
    throw Error('Incorrect password');

  }
  throw Error('Incorrect Email');
};
export default mongoose.model('User', userSchema);