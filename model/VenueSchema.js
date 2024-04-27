import mongoose from 'mongoose';

// Define schema for Venue
const venueSchema = new mongoose.Schema({
  name: String, // Name of the venue
  address: String, // Address of the venue
  capacity: Number, // Capacity of the venue
  price: Number // Price of the venue
});

// Create Venue model from schema
const Venue = mongoose.model('Venue', venueSchema);

export default Venue;