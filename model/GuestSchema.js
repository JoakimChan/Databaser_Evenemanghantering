import mongoose from 'mongoose';

// Schema för Guest
const guestSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Guest = mongoose.model('Guest', guestSchema);

export default Guest