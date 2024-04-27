# Databaser_Evenemanghantering

Jag satsar på betygen VG i detta projekt

## Postman
To access Databaser_Evenemanghantering APIs in Postman, copy the text below to the web browser: 
```
https://gold-firefly-601719.postman.co/workspace/Evenemangshantering~7cc7a967-3d2d-42c6-a391-225636bf6f3d/overview
```

## MongoDB
To connect your own MongoDB change the text on those places in VScode:
- server.js:
```

```
- event.js:
```

```
- seedDB.js:
```

```

## mock data
start by changing the value of the variables that suit your preference as: 
- times: how many event, guest, and venue to create
- start-, endDate: the event start, end date
- marketingTool = what marketing strategy
example:
```
const times = 3;
const startDate = new Date('2024-05-01');
const endDate = new Date('2024-12-31');
const marketingTool = "newpaper";
```
when satisfied with the variables run "node seedDB.js" to create mock data.

## dependencies installations
Open the terminal in VScode and tap those commands:
- npm init -y

- npm i express mongoose

- npm install @faker-js/faker --save-dev

- Mongoose npm install mongoose-paginate-v2

## model
The structure of all the lists that are created:
- EventSchema.js
- GuestSchema.js
- VenueSchema.js
  
## API 
For all the GET, POST, PUT, and DELETE requests:
- event.js
- guest.js
- venue.js


## documentation
Documentation on both manual and automated tests: 
- Test.md
