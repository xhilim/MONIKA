const express = require('express');

// Tworzenie aplikacji Express
const app = express();

// Definiowanie trasy dla głównego endpointu
app.get('/', (req, res) => {
  res.send('Witaj na moim serwerze Express!');
});

// Uruchomienie serwera na porcie 3000
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});