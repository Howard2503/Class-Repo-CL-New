// index.js
const express = require('express');
const app = express();
const port = 3000;

// Route 1: Serve static HTML page at the root "/"
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to My Portfolio</h1>
            <p>Here you'll find my projects and more information.</p>
        </body>
        </html>
    `);
});

// Example data array (can be projects, museum artworks, books, etc.)
const data = [
    { id: 1, title: "Project A", description: "Description of Project A", year: 2020 },
    { id: 2, title: "Project B", description: "Description of Project B", year: 2021 },
    { id: 3, title: "Project C", description: "Description of Project C", year: 2019 },
    { id: 4, title: "Project D", description: "Description of Project D", year: 2022 },
    { id: 5, title: "Project E", description: "Description of Project E", year: 2018 },
    { id: 6, title: "Project F", description: "Description of Project F", year: 2023 },
    { id: 7, title: "Project G", description: "Description of Project G", year: 2017 },
    { id: 8, title: "Project H", description: "Description of Project H", year: 2016 },
    { id: 9, title: "Project I", description: "Description of Project I", year: 2024 },
    { id: 10, title: "Project J", description: "Description of Project J", year: 2025 },
];

// Route 2: Serve JSON data at "/data"
app.get('/data', (req, res) => {
    res.json(data);
});

// Route 3: Serve dynamic JSON data at "/data/:id"
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(d => d.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send({ message: "Data not found" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
