import Venue from "../model/VenueSchema.js"

export default function venue(server, mongoose) {

  /*
  Skapar en GET-route på '/api/users'. 
  När denna route anropas, hämtar den alla dokument från vår "users"-samling och skickar tillbaka dem som ett JSON-svar.
  */
  server.get('/api/venue', async (req, res) => {
    try {
      res.json(await Venue.find());  // Använder Mongoose's "find"-metod för att hämta alla "users".
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av användare." });
    }
  });

  // Skapar en GET-route för att hämta en specifik användare med ett specifikt ID.
  server.get('/api/venue/:id', async (req, res) => {
    try {
      const one = await Venue.findById(req.params.id); // Hämtar användaren med ID från databasen.
      if (!one) {
        return res.status(404).json({ message: "hittades inte" });
      }
      res.json(one);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av en användare." });
    }
  });

  // Skapar en POST-route för att lägga till en ny användare.
  server.post('/api/venue', async (req, res) => {
    try {
      const newObject = new Venue({
        name: req.body.name,
        address: req.body.address,
        capacity: req.body.capacity,
        price: req.body.price
      });
      const savedObject = await newObject.save();
      res.status(201).json(savedObject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapa" });
    }
  });

  // Skapar en PUT-route för att uppdatera en användare med ett specifikt ID.
  server.put('/api/venue/:id', async (req, res) => {
    try {
      const updated = await Venue.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name,
          address: req.body.address,
          capacity: req.body.capacity,
          price: req.body.price
        }
      }, { new: true });  // Optionen { new: true } ser till att den uppdaterade användaren returneras

      if (!updated) {
        return res.status(404).json({ message: "Hittades inte" });
      }
      res.json(updated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid uppdatering." });
    }
  });

  // Skapar en DELETE-route för att radera en användare med ett specifikt ID.
  server.delete('/api/venue/:id', async (req, res) => {
    try {
      const deleted = await Venue.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Användaren hittades inte" });
      }
      res.json({ message: "har raderats!" }); // Bekräftelse på att användaren har raderats.
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering." });
    }
  });

}