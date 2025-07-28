const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Middleware for JSON parsing (move this up)
    server.use(express.json());

    // import routes
    const submitContact = require('./routes/submit-contact');

    // use routes
    server.use('/api', submitContact);
    // All other requests handled by Next.js
    server.all('*', (req, res) => {
        console.log(req.url)
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
