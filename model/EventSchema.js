import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Define schema for Event
const eventSchema = new mongoose.Schema({
  name: String, // Name of the event
  date: Date, // Date of the event
  marketing: String, // Marketing channel used for the event
  venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' }, // Reference to the Venue model
  guestList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guest' }] // List of guests attending the event
});

// Apply pagination plugin to schema
eventSchema.plugin(mongoosePaginate);

// Create Event model from schema
const Event = mongoose.model('Event', eventSchema);

export default Event;
