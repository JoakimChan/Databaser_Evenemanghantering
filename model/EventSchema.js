import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Schema för Event
const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  marketing: String,
  venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
});

eventSchema.plugin(mongoosePaginate)

const Event = mongoose.model('Event', eventSchema);

export default Event