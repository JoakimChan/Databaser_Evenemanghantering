import mongoose from 'mongoose';

// Schema för Guest
const guestSchema = new mongoose.Schema({
  name: String,
  email: String,
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
});

const Guest = mongoose.model('Guest', guestSchema);

export default Guest