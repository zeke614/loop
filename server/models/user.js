const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId; // only required if not using Google
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // allows null/undefined values for non-Google users
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);