const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

app.use(cors());

const card = require("./data/card.json");
const hotel = require("./data/hotel.json");

app.get("/", (req, res) => {
  res.send("Travel Guru is running");
});

app.get("/card", (req, res) => {
  res.send(card);
});

app.get("/hotel", (req, res) => {
  res.send(hotel);
});

app.get("/card/:id", (req, res) => {
  const id = req.params.id;
  const selectedCardId = card.find((c) => c.id == id);
  res.send(selectedCardId);
});

app.get("/hotel/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(hotel);
  } else {
    const selectedHotelId = hotel.filter(
      (h) => parseInt(h.categories_id) === id
    );
    res.send(selectedHotelId);
  }
});

app.listen(port, () => {
  console.log(`Travel Guru is running on port: ${port}`);
});
