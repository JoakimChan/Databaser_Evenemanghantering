import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import Event from "./model/EventSchema.js"
import Guest from './model/GuestSchema.js';
import Venue from './model/VenueSchema.js';

const venueIdList = [];
const guestIdList = [];

const times = 3;
const startDate = new Date('2024-05-01');
const endDate = new Date('2024-12-31');
const marketingTool = "newspaper";

async function seedDB() {
  try {
    // Connect to the MongoDB database
    mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering")

    // Create venues, guests, and events
    await createVenue(times)
    await createGuest(times)
    await createEvent(times)
  } catch (error) {
    console.log(`Errormessage: ${error}`)
  }
}

async function createVenue(amount) {
  for (let i = 0; i < amount; i++) {
    const newObject = new Venue({
      // Create a new Venue object with Faker.js generated data
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      capacity: faker.number.int({ min: 3, max: 10 }) * 10,
      price: faker.number.int({ min: 10, max: 50 }) * 1000
    })
    // Save the new Venue object to the database
    await newObject.save()
      .then(object => {
        // Push the ID of the newly created venue to the venueIdList array
        venueIdList.push(object._id)
      })
      .catch(err => {
        console.error(err);
      });
  }
}

async function createGuest(amount) {
  for (let i = 0; i < amount; i++) {
    // Create a new Guest object with Faker.js generated data
    const newObject = new Guest({
      name: faker.person.fullName(),
      email: faker.internet.email(),
    })
    // Save the new Guest object to the database
    await newObject.save()
      .then(object => {
        // Push the ID of the newly created guest to the guestIdList array
        guestIdList.push(object._id)
      })
      .catch(err => {
        console.error(err);
      });
  }
}

async function createEvent(amount) {
  for (let i = 0; i < amount; i++) {
    // Create a new Event object with Faker.js generated data and previously created venue and guest IDs
    const newObject = new Event({
      name: faker.music.songName(),
      date: faker.date.between({ from: startDate, to: endDate }).toISOString().split('T')[0],
      marketing: marketingTool,
      venue: venueIdList[i],
      guestList: guestIdList
    })
    // Save the new Event object to the database
    await newObject.save()
  }
}

// Call the seedDB function to seed the database with mock data
seedDB()