const express = require('express');
// import controller folder
const {getWater, addWater, updateWater, deleteWater} = require('./Controllers/waterControllers')

const app = express()

app.use(express.json());

// GET
app.get('/api/water', getWater)

// POST
app.post('/api/add_water', addWater)

// PUT
app.put('/api/update_water/:id', updateWater)

// DELETE
app.delete('/api/delete_water/:id', deleteWater)

const port = 4400;

app.listen(port, () => {console.log(`listening on port ${port}`)})