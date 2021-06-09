// server.js
import express from 'express';
import favicon from 'express-favicon';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '\\favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    console.log({ __dirname });
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(port);
