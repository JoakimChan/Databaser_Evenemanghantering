import Guest from "../model/GuestSchema.js"

export default function guest(server, mongoose) {

  // Creates a GET route to fetch all guests.
  server.get('/api/guest', async (req, res) => {
    try {
      // Fetches all guests using Mongoose's "find" method.
      const guests = await Guest.find();

      // Sends the fetched guests as a JSON response.
      res.json(guests);
    } catch (error) {
      // Handles server error if any occurred during fetching.
      res.status(500).json({ message: "An error occurred on the server while fetching." });
    }
  });


  // Creates a GET route to fetch a specific guest by its ID.
  server.get('/api/guest/:id', async (req, res) => {
    try {
      // Fetches the guest with the specified ID from the database.
      const guest = await Guest.findById(req.params.id);

      // Checks if the guest is found and returns it, or returns a 404 error if not found.
      if (!guest) {
        return res.status(404).json({ message: "Guest not found" });
      }

      // Sends the guest as a JSON response.
      res.json(guest);
    } catch (error) {
      // Handles server error if any occurred during fetching.
      res.status(500).json({ message: "An error occurred on the server while fetching." });
    }
  });


  // Creates a POST route to add new guests.
  server.post('/api/guest', async (req, res) => {
    try {
      const datas = req.body; // Extracts data from the request body.
      const multipleObject = []; // Array to store newly created guest objects.

      // Iterates over each data object in the request body.
      for (const data of datas) {
        // Creates a new Guest object with data from the request body.
        const newObject = new Guest({
          name: data.name,
          email: data.email
        });

        // Saves the new Guest object to the database.
        const savedObject = await newObject.save();

        // Adds the saved Guest object to the array.
        multipleObject.push(savedObject);
      }

      // Sends the array of saved Guest objects as a JSON response with status code 201 (Created).
      res.status(201).json(multipleObject);
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during creation.
      res.status(500).json({ message: "An error occurred on the server while creating." });
    }
  });


  // Creates a PUT route to update a guest with a specific ID.
  server.put('/api/guest/:id', async (req, res) => {
    try {
      // Updates the guest with the specified ID using the provided data in the request body.
      const updated = await Guest.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name,
          email: req.body.email
        }
      }, { new: true });  // The { new: true } option ensures that the updated guest is returned

      // Checks if the guest is found and updated, or returns a 404 error if not found.
      if (!updated) {
        return res.status(404).json({ message: "Guest not found" });
      }

      // Sends the updated guest as a JSON response.
      res.json(updated);
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during updating.
      res.status(500).json({ message: "An error occurred on the server while updating." });
    }
  });


  // Creates a DELETE route to delete a guest with a specific ID.
  server.delete('/api/guest/:id', async (req, res) => {
    try {
      // Deletes the guest with the specified ID.
      const deleted = await Guest.findByIdAndDelete(req.params.id);

      // Checks if the guest is found and deleted, or returns a 404 error if not found.
      if (!deleted) {
        return res.status(404).json({ message: "Guest not found" });
      }

      // Sends a confirmation message that the guest has been deleted.
      res.json({ message: "Guest has been deleted!" });
    } catch (error) {
      console.error(error);
      // Handles server error if any occurred during deletion.
      res.status(500).json({ message: "An error occurred on the server while deleting." });
    }
  });

}