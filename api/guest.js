import Guest from "../model/GuestSchema.js"

export default function guest(server, mongoose) {

  /*
  Skapar en GET-route på '/api/users'. 
  När denna route anropas, hämtar den alla dokument från vår "users"-samling och skickar tillbaka dem som ett JSON-svar.
  */
  server.get('/api/guest', async (req, res) => {
    try {
      res.json(await Guest.find());  // Använder Mongoose's "find"-metod för att hämta alla "users".
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av användare." });
    }
  });

  // Skapar en GET-route för att hämta en specifik användare med ett specifikt ID.
  server.get('/api/guest/:id', async (req, res) => {
    try {
      const guest = await Guest.findById(req.params.id); // Hämtar användaren med ID från databasen.
      if (!guest) {
        return res.status(404).json({ message: "hittades inte" });
      }
      res.json(guest);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av en användare." });
    }
  });

  // Skapar en POST-route för att lägga till en ny användare.
  server.post('/api/guest', async (req, res) => {
    try {
      const datas = req.body;
      const multipleObject = [];

      for (const data of datas) {
        const newObject = new Guest({
          name: data.name,
          email: data.email,
        });

        const savedObject = await newObject.save();

        multipleObject.push(savedObject);
      }

      res.status(201).json(multipleObject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapa" });
    }
  });

  // Skapar en PUT-route för att uppdatera en användare med ett specifikt ID.
  server.put('/api/guest/:id', async (req, res) => {
    try {
      const updated = await Guest.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name,
          email: eq.body.email,
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
  server.delete('/api/guest/:id', async (req, res) => {
    try {
      const deleted = await Guest.findByIdAndDelete(req.params.id);
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