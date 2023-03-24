const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
