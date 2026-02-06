import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
    type: String,
    set: function(v) {
      if (!v) return v;
      return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
    }
  },
    username: { 
      type: String, 
      required: true, 
      trim: true,
      set: function(v) {
      if (!v) return v;
      return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
    }
    },
    email: { 
      type: String, 
      required: function() {
        // Only require email for non-OAuth users
        return !this.googleId && !this.githubId;
      },
      lowercase: true 
    },
    password: { 
      type: String, 
      required: function() {
        // Only require password for non-OAuth users
        return !this.googleId && !this.githubId;
      },
      minlength: 8 
    },
    googleId: { 
      type: String, 
      sparse: true 
    },
    githubId: { 
      type: String, 
      sparse: true 
    },
    authProvider: {
      type: String,
      enum: ['local', 'google', 'github'],
      default: 'local'
    }
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { 
  unique: true, 
  sparse: true 
});


userSchema.pre('save', function(next) {
  if (this.googleId) {
    this.authProvider = 'google';
  } else if (this.githubId) {
    this.authProvider = 'github';
  } else {
    this.authProvider = 'local';
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;