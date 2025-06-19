const userSchema = new mongoose.Schema({
  // existing fields...
  profilePicture: { type: String },
  phone: { type: String },
  bio: { type: String }
});
