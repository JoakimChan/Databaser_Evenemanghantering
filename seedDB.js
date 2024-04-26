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
const marketingTool = "newpaper";

async function seedDB() {
  try {
    mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering")
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
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      capacity: faker.number.int({ min: 3, max: 10 }) * 10,
      price: faker.number.int({ min: 10, max: 50 }) * 1000
    })
    await newObject.save()
      .then(object => {
        venueIdList.push(object._id)
      })
      .catch(err => {
        console.error(err);
      });
  }
}

async function createGuest(amount) {
  for (let i = 0; i < amount; i++) {
    const newObject = new Guest({
      name: faker.person.fullName(),
      email: faker.internet.email(),
    })
    await newObject.save()
      .then(object => {
        guestIdList.push(object._id)
      })
      .catch(err => {
        console.error(err);
      });
  }
}

async function createEvent(amount) {
  for (let i = 0; i < amount; i++) {
    const newObject = new Event({
      name: faker.music.songName(),
      date: faker.date.between({ from: startDate, to: endDate }).toISOString().split('T')[0],
      marketing: marketingTool,
      venue: venueIdList[i],
      guestList: guestIdList
    })
    await newObject.save()
  }
}

seedDB()