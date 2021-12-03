const {Schema,model} = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    "name" : {required:true,type:String},
    "email" : {required:true,type:String},
    "password" : {required:true,type:String},
},{
    versionKey:false,
    timestamps:true,
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10, (err, hash) => {
      this.password = hash;
      return next();
    });
  });

  userSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, function (err, same) {
        if (err) return reject(err);
  
        return resolve(same);
      });
    });
  };

module.exports = new model("user",userSchema);