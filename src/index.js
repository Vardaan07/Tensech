const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const pantryId = "6254a69-21f2-4c37-ad8d-3d6c32ec7762";


const app = express();
const PORT = 9443;
//Using body parser as a middleware
app.use(bodyParser.json());
//Api endpoints will start from here

// Create Endpoint
app.post('/add-item/:pantryId/basket/:basketKey', async(req, res) => {
    try {
        const { pantryId, basketKey } = req.params;
        const payload = req.body;

        // Make a POST request to the Pantry API
        const response = await axios.post(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`, payload);

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Read Endpoint


app.get('/get-item/:pantryId/basket/:basketKey', async(req, res) => {
    try {
        const { pantryId, basketKey } = req.params;

        // Make a GET request to the Pantry API
        const response = await axios.get(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.put('/update-item/:pantryId/basket/:basketKey', async(req, res) => {
    try {
        const { pantryId, basketKey } = req.params;
        const payload = req.body;

        // Make a PUT request to the Pantry API
        const response = await axios.put(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`, payload);

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.delete('/delete-item/:pantryId/basket/:basketKey', async(req, res) => {
    try {
        const { pantryId, basketKey } = req.params;

        // Make a DELETE request to the Pantry API
        const response = await axios.delete(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Middleware for handling the error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//66254a69-21f2-4c37-ad8d-3d6c32ec7762
//https://getpantry.cloud/apiv1/pantry/66254a69-21f2-4c37-ad8d-3d6c32ec7762/basket/newBasket7