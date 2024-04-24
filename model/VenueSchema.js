import mongoose from 'mongoose';

// Schema för Venue
const venueSchema = new mongoose.Schema({
  name: String,
  address: String,
  capacity: Number,
  price: Number
});

const Venue = mongoose.model('Venue', venueSchema);

export default Venue