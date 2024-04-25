import Event from "../model/EventSchema.js"

export default function event(server, mongoose) {
  let isConnected = true
  /*
  Skapar en GET-route på '/api/users'. 
  När denna route anropas, hämtar den alla dokument från vår "users"-samling och skickar tillbaka dem som ett JSON-svar.
  */
  server.get('/api/event', async (req, res) => {
    try {
      if (req.query.disconnect === 'true') {
        if (isConnected) {
          await mongoose.disconnect();
          isConnected = false;
        }
      } else {
        if (!isConnected) {
          // Återanslut
          await mongoose.connect("mongodb+srv://chankayin:1234@cluster0.alhuwlj.mongodb.net/Evenemanghantering");
          isConnected = true;
        }
      }

      let query = {}; //Empty query type will show all workouts

      // If a type is specified modify the query to show only that kind of workout
      if (req.query.name) {
        query.name = req.query.name;
      }
      if (req.query.marketing) {
        query.marketing = req.query.marketing;
      }

      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10

      const events = await Event.paginate(query, { page: page, limit: limit }); // Filter workouts with the input query

      if (!events || events.docs.length === 0) {
        return res.status(404).json({ message: "No event found" })
      }

      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning" });
    }
  });

  // Skapar en GET-route för att hämta en specifik användare med ett specifikt ID.
  server.get('/api/event/:id', async (req, res) => {
    try {
      const one = await Event.findById(req.params.id); // Hämtar användaren med ID från databasen.
      if (!one) {
        return res.status(404).json({ message: "hittades inte" });
      }
      res.json(one);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning" });
    }
  });

  // Skapar en POST-route för att lägga till en ny användare.
  server.post('/api/event', async (req, res) => {
    try {
      const newObject = new Event({
        name: req.body.name,
        date: req.body.date,
        marketing: req.body.marketing,
        venue: req.body.venue,
        guestList: req.body.guestList
      });
      const savedObject = await newObject.save();
      res.status(201).json(savedObject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapa" });
    }
  });

  // Skapar en PUT-route för att uppdatera en användare med ett specifikt ID.
  server.put('/api/event/:id', async (req, res) => {
    try {
      const updated = await Event.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name,
          date: req.body.date,
          marketing: req.body.marketing,
          venue: req.body.venue,
          guestList: req.body.guestList
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
  server.delete('/api/event/:id', async (req, res) => {
    try {
      const deleted = await Event.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "hittades inte" });
      }
      res.json({ message: "har raderats!" }); // Bekräftelse på att användaren har raderats.
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering." });
    }
  });

}