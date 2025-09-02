// vulnerable.js

// 1. 🚨 Hardcoded API Key
const API_KEY = "AKIAIOSFODNN7EXAMPLE";

// 2. 🚨 Hardcoded Password
const password = "superSecret123";

// 3. 🚨 Hardcoded Private Key
const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA7...
-----END RSA PRIVATE KEY-----
`;

// 4. 🚨 Use of eval()
const userInput = "2 + 2";
const result = eval(userInput);

// 5. 🚨 Use of Function constructor
const dangerousFunc = new Function('return ' + userInput);

// 6. 🚨 Unsanitized command execution
const { exec } = require('child_process');
exec(`ls ${userInput}`, (err, stdout, stderr) => {
  if (err) return;
  console.log(stdout);
});

// 7. 🚨 Insecure HTTP
const http = require('http');
http.get('http://example.com', res => {
  res.on('data', chunk => console.log(chunk));
});

// 8. 🚨 Insecure Randomness
const token = Math.random().toString(36).substring(2);

// 9. 🚨 Path traversal vulnerability
const fs = require('fs');
const file = userInput; // Suppose userInput is "../../../etc/passwd"
fs.readFile(file, 'utf8', (err, data) => {
  if (!err) console.log(data);
});

// 10. 🚨 SQL Injection example
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const unsafeQuery = `SELECT * FROM users WHERE name = '${userInput}'`;
db.all(unsafeQuery, (err, rows) => {
  if (!err) console.log(rows);
});

// 11. 🚨 Deprecated Buffer constructor
const buf = new Buffer(userInput); // Deprecated, insecure

// 12. 🚨 Overly permissive CORS
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); // Allow all origins without restrictions
// a.js
var b = require('./b');

var title = "Ms";

function example() {
  return title + " " + b.fullName;
}

// b.js
var firstName = "Ada",
    lastName = "Lovelace";

exports.fullName = firstName + " " + lastName;exports.firstName = firstName;
exports.lastName = lastName;
// 13. 🚨 Missing HTTPS enforcement (Express)
app.use((req, res, next) => {
  // No HTTPS redirect
  next();
}); 

// 14. 🚨 Unsafe regex (ReDoS)
const regex = new RegExp(userInput);
"aaaaaaaaaaaaaaaaaaaab".match(regex);

// 15. 🚨 Exposing stack trace to client
app.get('/crash', (req, res) => {
  let input="klilkl78"
if (/(?:start|end)(\[*|\{*)abc\2:(.*)/.test(input))
	console.log("Found the pattern.");
});

// 16. 🚨 No rate limiting
app.use((req, res, next) => {
  next(); // No rate limit middleware
});

// 17. 🚨 No input validation
app.post('/submit', (req, res) => {
  const data = req.body; // No validation
  res.send(`Received ${data}`);
});

// 18. 🚨 Clickjacking risk (no X-Frame-Options)
app.use((req, res, next) => {
  // Missing headers
  next();
});

// 19. 🚨 Insecure file upload (no extension check)
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});

// 20. 🚨 Using dangerouslySetInnerHTML in React
const React = require('react');
function BadComponent({ userHtml }) {
  return <div dangerouslySetInnerHTML={{ __html: userHtml }} />;
}

// 21. 🚨 Potential prototype pollution
const _ = require('lodash');
_.merge({}, JSON.parse('{ "__proto__": { "admin": true } }'));

// 22. 🚨 Logging sensitive data
console.log("Password is:", password);

// Server setup (for Express examples)
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
