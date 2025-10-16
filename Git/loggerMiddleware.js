const express = require('express');
const app = express();

function myMiddleware(req, res, next) {
  console.log('Middleware running');
  next(); 
}

app.use(myMiddleware); 

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});