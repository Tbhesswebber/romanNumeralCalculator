// === set up environment ===
const dotenv = require('dotenv').config(); // eslint-disable-line no-unused-vars

// === import local files ===
const app = require('./app.js');

// ===start server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`See the magic on port ${PORT}`); // eslint-disable-line no-console
});
