# Databaser_Evenemanghantering

Jag satsar på betygen VG i detta projekt

## Introduction
This project involves managing events, venues, and guests as part of a school assignment

The primary objective is to establish a MongoDB database, generate mock data, and utilize Postman to dispatch APIs.


## Dependencies installations
Open the terminal in VScode and tap those commands:
>Installations of package.json
```
npm init -y
```
>Installations express and mongoose
```
npm i express mongoose
```
>Installations of faker
```
npm install @faker-js/faker --save-dev
```
>Installations of pagination
```
npm install mongoose-paginate-v2
```
>Installations of express-rate-limit
```
npm i express-rate-limit
```

## Postman
To access **Test collection** and **MockServer collection** in Postman, copy the text below to the web browser: 
```
https://gold-firefly-601719.postman.co/workspace/Evenemangshantering~7cc7a967-3d2d-42c6-a391-225636bf6f3d/overview
```

## MongoDB
To connect your own MongoDB change the text on those places in VScode:
>server.js:
```
mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering")
```
>event.js:
```
await mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering");
```
>seedDB.js:
```
mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering")
```
To start the server run the text below in the VScode terminal:
```
node server.js
```

## mock data
- Mock data is fake data that resembles real data but is used for testing or demonstration purposes
- Helps ensure that applications function correctly and reliably under various conditions

Create mock data:
Start by changing the value of the variables that suit your preference as: 
- **times**: how many events, guests, and venues to create
- **start-**, **endDate**: the event start, end date
- **marketingTool** = what marketing strategy
>seedDB.js:
```
const times = 3;
const startDate = new Date('2024-05-01');
const endDate = new Date('2024-12-31');
const marketingTool = "newpaper";
```
When satisfied with the variables run the text below in the VScode terminal to create:
```
node seedDB.js
```

## model
The structure of all the lists that are created:
- model/ EventSchema.js
- model/ GuestSchema.js
- model/ VenueSchema.js

  
## API 
- **GET** -It is used to retrieve data from a server. It's like asking for a specific web page or information
>For example:
When you enter a URL in your browser's address bar or click on a link, your browser sends a GET request to the server to retrieve the webpage.
- **POST** -It is used to send data to a server to create or update a resource. It's like submitting a form with your information.
>For example:
When you fill out a registration form on a website and click "Submit," your browser sends a POST request to the server with the form data.
- **PUT** -It is used to send data to a server to create or update a resource, but it's typically used to update existing resources rather than create new ones.
>For example:
If you want to update your profile information on a website, your browser might send a PUT request to the server with the updated data.
- **DEL** -It is used to request that a server delete a specified resource.
>For example:
If you want to delete a file from a server, you might send a DELETE request with the filename to the server.

For all the GET, POST, PUT, and DELETE requests:
- api/ event.js
- api/ guest.js
- api/ venue.js


## documentation
Documentation on both manual and automated tests: 
- documentation/ Test.md
