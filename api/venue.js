import Venue from "../model/VenueSchema.js"

export default function venue(server, mongoose) {

  // Creates a GET route to fetch all venues.
  server.get('/api/venue', async (req, res) => {
    try {
      // Fetches all venues using Mongoose's "find" method.
      const venues = await Venue.find();

      // Sends the fetched venues as a JSON response.
      res.json(venues);
    } catch (error) {
      // Handles server error if any occurred during fetching.
      res.status(500).json({ message: "An error occurred on the server while fetching." });
    }
  });


  // Creates a GET route to fetch a specific venue by its ID.
  server.get('/api/venue/:id', async (req, res) => {
    try {
      // Fetches the venue with the specified ID from the database.
      const venue = await Venue.findById(req.params.id);

      // Checks if the venue is found and returns it, or returns a 404 error if not found.
      if (!venue) {
        return res.status(404).json({ message: "Venue not found" });
      }

      // Sends the venue as a JSON response.
      res.json(venue);
    } catch (error) {
      // Handles server error if any occurred during fetching.
      res.status(500).json({ message: "An error occurred on the server while fetching." });
    }
  });


  // Creates a POST route to add a new venue.
  server.post('/api/venue', async (req, res) => {
    try {
      // Creates a new Venue object with data from the request body.
      const newObject = new Venue({
        name: req.body.name,
        address: req.body.address,
        capacity: req.body.capacity,
        price: req.body.price
      });

      // Saves the new Venue object to the database.
      const savedObject = await newObject.save();

      // Sends the saved Venue object as a JSON response with status code 201 (Created).
      res.status(201).json(savedObject);
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during creation.
      res.status(500).json({ message: "An error occurred on the server while creating." });
    }
  });


  // Creates a PUT route to update a venue with a specific ID.
  server.put('/api/venue/:id', async (req, res) => {
    try {
      // Updates the venue with the specified ID using the provided data in the request body.
      const updated = await Venue.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name,
          address: req.body.address,
          capacity: req.body.capacity,
          price: req.body.price
        }
      }, { new: true });  // The { new: true } option ensures that the updated venue is returned

      // Checks if the venue is found and updated, or returns a 404 error if not found.
      if (!updated) {
        return res.status(404).json({ message: "Venue not found" });
      }

      // Sends the updated venue as a JSON response.
      res.json(updated);
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during updating.
      res.status(500).json({ message: "An error occurred on the server while updating." });
    }
  });


  // Creates a DELETE route to delete a venue with a specific ID.
  server.delete('/api/venue/:id', async (req, res) => {
    try {
      // Deletes the venue with the specified ID.
      const deleted = await Venue.findByIdAndDelete(req.params.id);

      // Checks if the venue is found and deleted, or returns a 404 error if not found.
      if (!deleted) {
        return res.status(404).json({ message: "Venue not found" });
      }

      // Sends a confirmation message that the venue has been deleted.
      res.json({ message: "Venue has been deleted!" });
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during deletion.
      res.status(500).json({ message: "An error occurred on the server while deleting." });
    }
  });

}