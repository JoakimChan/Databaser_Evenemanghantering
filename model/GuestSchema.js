import mongoose from 'mongoose';

// Define schema for Guest
const guestSchema = new mongoose.Schema({
  name: String, // Name of the guest
  email: String, // Email of the guest
});

// Create Guest model from schema
const Guest = mongoose.model('Guest', guestSchema);

export default Guest;