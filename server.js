const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

app.get('/api', (req,res) => {
    res.json({
        message: process.env.API_BASE_URL
    });
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));