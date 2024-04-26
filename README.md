# Databaser_Evenemanghantering

Jag satsar på betygen VG i detta projekt

## MongoDB

mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering

## Postman

https://gold-firefly-601719.postman.co/workspace/Evenemangshantering~7cc7a967-3d2d-42c6-a391-225636bf6f3d/overview

## dependencies instalations
npm init -y

npm i express mongoose

npm install @faker-js/faker --save-dev

Mongoose npm install mongoose-paginate-v2

## mock data
start by change the value of the variables that suits your preferens as: 
- times: how many event, guest and venue to create
- start-, endDate: the event start, end date
- marketingTool = what marketing strategy
exampel:
```
const times = 3;
const startDate = new Date('2024-05-01');
const endDate = new Date('2024-12-31');
const marketingTool = "newpaper";
```
when satisfied with the variables run "node seedDB.js" to create mock data.

## api 
For all the GET, POST, PUT and DELETE request:
- event.js
- guest.js
- venue.js

## model
The structure of all the list that are created:
- EventSchema.js
- GuestSchema.js
- VenueSchema.js

## documentation
A documentation on both manual and automated test: 
- Test.md