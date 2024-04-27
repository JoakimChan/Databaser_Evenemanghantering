import Event from "../model/EventSchema.js"

export default function event(server, mongoose) {
  let connected = true


  server.get('/api/event', async (req, res) => {
    try {
      // Check if the query parameter "disconnect" is true and disconnect from MongoDB if it is
      if (req.query.disconnect === 'true') {
        if (connected) {
          await mongoose.disconnect();
          connected = false;
        }
      } else {
        if (!connected) {
          // Reconnect to MongoDB if not already connected
          await mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering");
          connected = true;
        }
      }

      // Build query based on query parameters "name" and "marketing"
      let query = {};
      if (req.query.name) {
        query.name = req.query.name;
      }
      if (req.query.marketing) {
        query.marketing = req.query.marketing;
      }

      // Set pagination options for events
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10

      // Fetch events based on query and pagination options
      const events = await Event.paginate(query, { page: page, limit: limit });

      // Check if events are found and return them, or return a 404 if no events are found
      if (!events || events.docs.length === 0) {
        return res.status(404).json({ message: "No event found" })
      }

      // Send events as JSON response
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "An error occurred on the server while fetching" });
    }
  });


  // Creates a GET route to fetch a specific event by its ID.
  server.get('/api/event/:id', async (req, res) => {
    try {
      // Fetches the event with the specified ID from the database.
      const event = await Event.findById(req.params.id);

      // Checks if the event is found and returns it, or returns a 404 error if not found.
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }

      // Sends the event as a JSON response.
      res.json(event);
    } catch (error) {
      // Handles server error if any occurred during fetching.
      res.status(500).json({ message: "An error occurred on the server while fetching" });
    }
  });


  // Creates a POST route to add a new event.
  server.post('/api/event', async (req, res) => {
    try {
      // Creates a new Event object with data from the request body.
      const newObject = new Event({
        name: req.body.name, // Name of the event
        date: req.body.date, // Date of the event
        marketing: req.body.marketing, // Marketing channel used for the event
        venue: req.body.venue, // Venue of the event
        guestList: req.body.guestList // List of guests attending the event
      });

      // Saves the new Event object to the database.
      const savedObject = await newObject.save();

      // Sends the saved Event object as a JSON response with status code 201 (Created).
      res.status(201).json(savedObject);
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during creation.
      res.status(500).json({ message: "An error occurred on the server while creating" });
    }
  });


  // Creates a PUT route to update an event with a specific ID.
  server.put('/api/event/:id', async (req, res) => {
    try {
      // Updates the event with the specified ID using the provided data in the request body.
      const updated = await Event.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name, // Updates the name of the event
          date: req.body.date, // Updates the date of the event
          marketing: req.body.marketing, // Updates the marketing channel used for the event
          venue: req.body.venue, // Updates the venue of the event
          guestList: req.body.guestList // Updates the list of guests attending the event
        }
      }, { new: true });  // The { new: true } option ensures that the updated event is returned

      // Checks if the event is found and updated, or returns a 404 error if not found.
      if (!updated) {
        return res.status(404).json({ message: "Event not found" });
      }

      // Sends the updated event as a JSON response.
      res.json(updated);
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during updating.
      res.status(500).json({ message: "An error occurred on the server while updating." });
    }
  });


  // Creates a DELETE route to delete an event with a specific ID.
  server.delete('/api/event/:id', async (req, res) => {
    try {
      // Deletes the event with the specified ID.
      const deleted = await Event.findByIdAndDelete(req.params.id);

      // Checks if the event is found and deleted, or returns a 404 error if not found.
      if (!deleted) {
        return res.status(404).json({ message: "Event not found" });
      }

      // Sends a confirmation message that the event has been deleted.
      res.json({ message: "Event has been deleted!" });
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during deletion.
      res.status(500).json({ message: "An error occurred on the server while deleting." });
    }
  });

}