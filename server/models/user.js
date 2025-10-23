import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: true, 
      trim: true 
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

// Better indexing strategy
userSchema.index({ email: 1 }, { 
  unique: true, 
  sparse: true // This allows multiple null values
});

userSchema.index({ googleId: 1 }, { sparse: true });
userSchema.index({ githubId: 1 }, { sparse: true });

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